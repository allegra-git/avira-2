'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default function Tray3D({ height = 600, autoSpin = true }: { height?: number; autoSpin?: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(mount.clientWidth, height)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1e2022)

    // Camera
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / height, 0.1, 100)
    camera.position.set(3, 2.5, 3)
    camera.lookAt(0, 0, 0)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.minPolarAngle = 0.2
    controls.maxPolarAngle = Math.PI / 2 - 0.05
    controls.enablePan = false
    controls.enableZoom = false  // disabled until mouse is over canvas
    controls.autoRotate = autoSpin
    controls.autoRotateSpeed = 0.8

    // Only allow zoom/scroll when mouse is actually over the canvas
    const onEnter = () => { controls.enableZoom = true }
    const onLeave = () => { controls.enableZoom = false }
    mount.addEventListener('mouseenter', onEnter)
    mount.addEventListener('mouseleave', onLeave)

    // Tray material — brushed 316L stainless steel
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xd0d4d0),
      metalness: 0.88,
      roughness: 0.18,
      side: THREE.DoubleSide,
    })

    // Tray geometry: 320×240mm → 3.20×2.40 units, wall 40mm=0.40, thickness 1.5mm=0.015
    const TW = 3.20, TD = 2.40, TH = 0.40, TT = 0.015
    const parts = [
      new THREE.BoxGeometry(TW, TT, TD),                           // bottom
      new THREE.BoxGeometry(TW, TH, TT),                           // front wall
      new THREE.BoxGeometry(TW, TH, TT),                           // back wall
      new THREE.BoxGeometry(TT, TH, TD - 2 * TT),                  // left wall
      new THREE.BoxGeometry(TT, TH, TD - 2 * TT),                  // right wall
    ]
    const positions = [
      [0, TT / 2, 0],
      [0, TH / 2, TD / 2 - TT / 2],
      [0, TH / 2, -(TD / 2 - TT / 2)],
      [-(TW / 2 - TT / 2), TH / 2, 0],
      [TW / 2 - TT / 2, TH / 2, 0],
    ]
    const trayGroup = new THREE.Group()
    parts.forEach((geo, i) => {
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...(positions[i] as [number, number, number]))
      mesh.castShadow = true
      mesh.receiveShadow = true
      trayGroup.add(mesh)
    })

    // 4 rubber feet
    const footMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0, roughness: 0.9 })
    const footGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.055, 12)
    const footPositions: [number, number, number][] = [
      [TW / 2 - 0.15, -0.055 / 2, TD / 2 - 0.12],
      [-(TW / 2 - 0.15), -0.055 / 2, TD / 2 - 0.12],
      [TW / 2 - 0.15, -0.055 / 2, -(TD / 2 - 0.12)],
      [-(TW / 2 - 0.15), -0.055 / 2, -(TD / 2 - 0.12)],
    ]
    footPositions.forEach(pos => {
      const foot = new THREE.Mesh(footGeo, footMat)
      foot.position.set(...pos)
      trayGroup.add(foot)
    })

    scene.add(trayGroup)

    // Lighting
    const ambient = new THREE.AmbientLight(0xf0efec, 1.4)
    scene.add(ambient)
    const key = new THREE.DirectionalLight(0xffffff, 2.8)
    key.position.set(-3, 4, 3)
    key.castShadow = true
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xe8eef5, 0.9)
    fill.position.set(3, 2, -2)
    scene.add(fill)
    const rim = new THREE.DirectionalLight(0xffffff, 0.5)
    rim.position.set(0, -1, -4)
    scene.add(rim)
    const bounce = new THREE.DirectionalLight(0xf0efec, 0.25)
    bounce.position.set(0, -3, 0)
    scene.add(bounce)

    // Animation loop
    const onInteract = () => { controls.autoRotate = false }
    renderer.domElement.addEventListener('pointerdown', onInteract)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const onResize = () => {
      if (!mount) return
      renderer.setSize(mount.clientWidth, height)
      camera.aspect = mount.clientWidth / height
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('pointerdown', onInteract)
      mount.removeEventListener('mouseenter', onEnter)
      mount.removeEventListener('mouseleave', onLeave)
      controls.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [height, autoSpin])

  return <div ref={mountRef} style={{ width: '100%', height }} />
}
