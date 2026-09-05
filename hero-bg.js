(function () {
  if (typeof THREE === 'undefined') return;

  const canvas = document.getElementById('hero-canvas');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection) return;

  let scene, camera, renderer;
  try {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 10;
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  } catch (e) {
    return;
  }

  const PARTICLE_COUNT = 220;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);
  const cyanColor = new THREE.Color(0x5ff2e0);
  const limeColor = new THREE.Color(0xbaf25e);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    const c = Math.random() > 0.55 ? limeColor : cyanColor;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  dustGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const dustMaterial = new THREE.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
    depthWrite: false
  });

  const dust = new THREE.Points(dustGeometry, dustMaterial);
  scene.add(dust);

  const blobGeometry = new THREE.IcosahedronGeometry(2.3, 5);
  const posAttr = blobGeometry.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < posAttr.count; i++) {
    v.fromBufferAttribute(posAttr, i);
    const n = v.clone().normalize();
    const bump = (Math.sin(v.x * 1.6) + Math.sin(v.y * 1.9) + Math.sin(v.z * 1.4)) * 0.16;
    v.addScaledVector(n, bump);
    posAttr.setXYZ(i, v.x, v.y, v.z);
  }
  blobGeometry.computeVertexNormals();

  const blobMaterial = new THREE.MeshStandardMaterial({
    color: 0x0a1a12,
    emissive: 0x123322,
    emissiveIntensity: 0.7,
    metalness: 0.25,
    roughness: 0.35,
    transparent: true,
    opacity: 0.92
  });

  const blob = new THREE.Mesh(blobGeometry, blobMaterial);
  blob.position.set(1.4, -0.3, -2);
  scene.add(blob);

  scene.add(new THREE.AmbientLight(0x0a1510, 0.7));
  const cyanLight = new THREE.PointLight(0x5ff2e0, 6, 22);
  cyanLight.position.set(3.5, 2.2, 4);
  scene.add(cyanLight);
  const limeLight = new THREE.PointLight(0xbaf25e, 4.5, 22);
  limeLight.position.set(-3, -1.5, 3.5);
  scene.add(limeLight);

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  function resize() {
    const rect = heroSection.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    mouseX += (targetX - mouseX) * 0.03;
    mouseY += (targetY - mouseY) * 0.03;
    dust.rotation.y += 0.0006;
    dust.rotation.x += 0.0002;
    blob.rotation.y += 0.0016;
    blob.rotation.x += 0.0009;
    const breathe = 1 + Math.sin(t * 0.5) * 0.04;
    blob.scale.set(breathe, breathe, breathe);
    camera.position.x = mouseX * 0.8;
    camera.position.y = -mouseY * 0.5;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  animate();
})();
