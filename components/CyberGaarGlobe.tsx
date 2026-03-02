import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import '../globe-cursor.css';

interface CyberGaarGlobeProps {
  onBannerHiddenChange?: (hidden: boolean) => void;
}

const CyberGaarGlobe: React.FC<CyberGaarGlobeProps> = ({ onBannerHiddenChange }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);

  const labelRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const linesRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const isDraggingRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef(true); // Auto-rotate by default

  // Full Country Data
  const countryData = useMemo(() => {
    const rawData = [
      { name: 'United States', lat: [24, 50], lon: [-125, -66], standards: ['NIST', 'SOC 2', 'HIPAA', 'PCI DSS', 'FISMA', 'GLBA'] },
      { name: 'Canada', lat: [50, 70], lon: [-130, -60], standards: ['PIPEDA', 'ISO27001', 'CyberSecure Canada'] },
      { name: 'Mexico', lat: [14, 32], lon: [-118, -86], standards: ['LFPDPPP', 'ISO27001'] },
      { name: 'Brazil', lat: [-30, -5], lon: [-70, -40], standards: ['LGPD', 'ISO27001', 'Cybersecurity Strategy'] },
      { name: 'Argentina', lat: [-50, -25], lon: [-70, -60], standards: ['PDPA', 'ISO27001', 'Law 25.326'] },
      { name: 'United Kingdom', lat: [50, 58], lon: [-8, 2], standards: ['CyberEss', 'GDPR', 'PCI', 'NIS Regulations', 'UK GDPR', 'Data Protection Act 2018'] },
      { name: 'France', lat: [42, 51], lon: [-5, 8], standards: ['LPM', 'GDPR', 'NIS2', 'SecNumCloud'] },
      { name: 'Germany', lat: [47, 55], lon: [6, 15], standards: ['BSI', 'GDPR', 'IT-SiG', 'KRITIS'] },
      { name: 'Spain', lat: [36, 43], lon: [-8, 2], standards: ['ENS', 'GDPR', 'NIS2'] },
      { name: 'Italy', lat: [38, 46], lon: [8, 16], standards: ['ISO27001', 'GDPR', 'NIS2', 'Legislative Decree 138/2024'] },
      { name: 'Netherlands', lat: [51, 53], lon: [4, 7], standards: ['BIO', 'GDPR', 'NIS2', 'Wbni'] },
      { name: 'Sweden', lat: [58, 64], lon: [12, 18], standards: ['ISO27001', 'NIS2'] },
      { name: 'Poland', lat: [50, 54], lon: [18, 22], standards: ['ISO27001', 'NIS2'] },
      { name: 'Russia', lat: [50, 70], lon: [30, 100], standards: ['FSTEC', '152-FZ', '187-FZ', 'Critical Infrastructure Law'] },
      { name: 'China', lat: [25, 45], lon: [90, 120], standards: ['MLPS', 'PIPL', 'CSL', 'DSL'] },
      { name: 'Japan', lat: [32, 42], lon: [130, 140], standards: ['ISMS', 'APPI', 'Cybersecurity Basic Act'] },
      { name: 'India', lat: [10, 30], lon: [70, 85], standards: ['CERT-In', 'DPDPA', 'IT Act 2000', 'SPDI Rules'] },
      { name: 'Pakistan', lat: [25, 35], lon: [65, 75], standards: ['PECA', 'NCSS'] },
      { name: 'Afghanistan', lat: [30, 36], lon: [62, 70], standards: ['Cyber Law'] },
      { name: 'Iran', lat: [28, 38], lon: [50, 60], standards: ['FATA', 'Computer Crimes Law'] },
      { name: 'Australia', lat: [-35, -20], lon: [115, 150], standards: ['ISM', 'Essential8', 'Privacy Act 1988', 'SOCI Act'] },
      { name: 'South Africa', lat: [-32, -25], lon: [20, 30], standards: ['POPIA', 'Cybercrimes Act'] },
      { name: 'Egypt', lat: [25, 30], lon: [28, 32], standards: ['PDPL', 'Cybercrime Law 175/2018'] },
      { name: 'Nigeria', lat: [8, 12], lon: [6, 10], standards: ['NDPR', 'Cybercrimes Act 2015'] },
      { name: 'Kenya', lat: [-2, 2], lon: [36, 40], standards: ['DPA', 'Computer Misuse and Cybercrimes Act'] },
      { name: 'Saudi Arabia', lat: [20, 26], lon: [42, 48], standards: ['ECC', 'NCA', 'PDPL', 'SAMA CSF'] },
      { name: 'UAE', lat: [22, 25], lon: [53, 56], standards: ['ISR', 'NESA', 'PDPL', 'Federal Data Protection Law'] },
      { name: 'Turkey', lat: [37, 41], lon: [30, 40], standards: ['KVKK', 'Law 5651', 'Cyber Security Strategy'] },
      { name: 'Singapore', lat: [1, 2], lon: [103, 104], standards: ['PDPA', 'CSA', 'Cyber Security Act 2018'] },
      { name: 'South Korea', lat: [35, 38], lon: [126, 129], standards: ['ISMS-P', 'PIPA', 'Network Act'] },
      { name: 'Indonesia', lat: [-5, 0], lon: [105, 120], standards: ['PDP', 'ISO27001', 'Law 27/2022'] },
      { name: 'Thailand', lat: [13, 20], lon: [97, 106], standards: ['PDPA', 'Cybersecurity Act B.E. 2562'] },
      { name: 'Vietnam', lat: [8, 23], lon: [102, 110], standards: ['Cyber Law', 'Law on Cyber Security 2018', 'PDP Decree'] }
    ];

    return rawData.map(country => {
      const centerLat = (country.lat[0] + country.lat[1]) / 2;
      const centerLon = (country.lon[0] + country.lon[1]) / 2;

      // Convert to radians and adjust for Three.js coordinate system
      const latRad = centerLat * Math.PI / 180;
      const lonRad = (centerLon + 180) * Math.PI / 180; // Adjust for Three.js coordinate system
      const radius = 5;

      // Spherical to Cartesian conversion for Three.js with flipped X
      const x = -radius * Math.cos(latRad) * Math.cos(lonRad); // Flip X axis
      const y = radius * Math.sin(latRad);
      const z = radius * Math.cos(latRad) * Math.sin(lonRad);

      return { ...country, position: new THREE.Vector3(x, y, z) };
    });
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let earthGroup: THREE.Group | null = null;
    let globe: THREE.Mesh | null = null;
    let atmosphere: THREE.Mesh | null = null;
    let starsMesh: THREE.Points | null = null;

    // Cleanup function to dispose all resources
    const cleanup = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Dispose geometries and materials
      const disposeObject = (obj: THREE.Object3D) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (obj.material instanceof THREE.Material) {
            obj.material.dispose();
            if (obj.material.map) obj.material.map.dispose();
          } else if (Array.isArray(obj.material)) {
            obj.material.forEach(mat => {
              mat.dispose();
              if (mat.map) mat.map.dispose();
            });
          }
        }
      };

      if (scene) {
        scene.traverse(disposeObject);
      }

      if (renderer) {
        renderer.dispose();
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };

    // Declare event handlers outside try block
    let handleMouseDown: (e: MouseEvent) => void;
    let handleMouseMove: (e: MouseEvent) => void;
    let handleMouseUp: () => void;
    let handleMouseClick: (e: MouseEvent) => void;
    let handleTouchStart: (e: TouchEvent) => void;
    let handleTouchMove: (e: TouchEvent) => void;
    let handleTouchEnd: () => void;
    let handleWheel: (e: WheelEvent) => void;
    let handleResize: () => void;

    try {
      // Scene setup
      scene = new THREE.Scene();
      sceneRef.current = scene;

      // Use actual viewport dimensions with adjusted field of view
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const actualAspectRatio = containerWidth / containerHeight;

      // Adjust field of view based on aspect ratio to prevent distortion
      let fov = 45;
      if (actualAspectRatio < 0.6) {
        // Extreme portrait - reduce vertical FOV
        fov = 30;
      } else if (actualAspectRatio < 1.0) {
        // Portrait - moderate vertical FOV
        fov = 35;
      }

      // Debug container dimensions
      console.log('Container dimensions:', {
        containerWidth,
        containerHeight,
        actualAspectRatio,
        fov,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        clientWidth: mountRef.current.clientWidth,
        clientHeight: mountRef.current.clientHeight
      });

      camera = new THREE.PerspectiveCamera(fov, actualAspectRatio, 0.1, 1000);
      cameraRef.current = camera;

      // Calculate responsive globe size based on screen width
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      let globeRadius;

      if (isMobile) {
        globeRadius = 2.5; // Smaller on mobile
      } else if (isTablet) {
        globeRadius = 3.5; // Medium on tablet
      } else {
        globeRadius = 5; // Full size on desktop
      }

      // Adjust camera position for proper globe size - ensure globe is not zoomed in
      if (isMobile) {
        camera.position.z = 15; // Further back for proper mobile size
        camera.position.x = 0; // Ensure centered horizontally
        camera.position.y = 0; // Ensure centered vertically
      } else if (isTablet) {
        camera.position.z = 20; // Further back for tablet
        camera.position.x = 0;
        camera.position.y = 0;
      } else {
        camera.position.z = 25; // Further back for desktop
        camera.position.x = 0;
        camera.position.y = 0;
      }

      // Debug camera positioning
      console.log('Camera positioned:', {
        isMobile,
        isTablet,
        position: camera.position,
        containerWidth,
        containerHeight,
        aspect: camera.aspect
      });

      // Optimized renderer settings for memory efficiency
      renderer = new THREE.WebGLRenderer({
        antialias: false, // Disable antialiasing to save memory
        alpha: true,
        powerPreference: "default", // Use default instead of high-performance
        stencil: false,
        depth: true,
        preserveDrawingBuffer: false // Don't preserve drawing buffer
      });
      rendererRef.current = renderer;
      renderer.setSize(containerWidth, containerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1)); // Limit to 1x to save memory
      mountRef.current.appendChild(renderer.domElement);

      earthGroup = new THREE.Group();
      globeGroupRef.current = earthGroup;
      scene.add(earthGroup);

      // Load earth texture with proper error handling
      const textureLoader = new THREE.TextureLoader();

      // Debug globe creation
      console.log('Creating globe with radius:', globeRadius);

      textureLoader.load('/earth-texture.jpg',
        (earthTexture) => {
          try {
            const geometry = new THREE.SphereGeometry(globeRadius, 32, 32); // Responsive radius
            const material = new THREE.MeshBasicMaterial({ map: earthTexture });
            globe = new THREE.Mesh(geometry, material);
            globeRef.current = globe;

            // Ensure globe is centered at origin
            globe.position.set(0, 0, 0);

            earthGroup.add(globe);

            // Debug globe and earthGroup position
            console.log('Globe created and added:', {
              globePosition: globe.position,
              earthGroupPosition: earthGroup.position,
              cameraPosition: camera.position,
              globeVisible: globe.visible,
              earthGroupVisible: earthGroup.visible,
              radius: globeRadius
            });

            animate();
          } catch (error) {
            console.error('Error creating globe mesh:', error);
            createFallbackGlobe(globeRadius);
          }
        },
        undefined,
        (error) => {
          console.error('Error loading texture:', error);
          createFallbackGlobe(globeRadius);
        }
      );

      // Create fallback globe with bright color for testing
      const createFallbackGlobe = (radius: number) => {
        console.log('Creating fallback globe with radius:', radius);
        try {
          const geometry = new THREE.SphereGeometry(radius, 32, 32);
          const material = new THREE.MeshBasicMaterial({
            color: 0xff0000, // Bright red for visibility
            wireframe: false
          });
          globe = new THREE.Mesh(geometry, material);
          globeRef.current = globe;

          // Ensure globe is centered at origin
          globe.position.set(0, 0, 0);

          earthGroup.add(globe);

          // Debug fallback globe
          console.log('Fallback globe created:', {
            globePosition: globe.position,
            earthGroupPosition: earthGroup.position,
            cameraPosition: camera.position,
            color: 0xff0000,
            radius
          });

          animate();
        } catch (error) {
          console.error('Error creating fallback globe:', error);
        }
      };

      const atmosphereGeometry = new THREE.SphereGeometry(globeRadius * 1.08, 16, 16); // Responsive atmosphere size
      const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
            gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0) * intensity * 1.5;
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false
      });
      atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphere);

      // Optimized stars with realistic rendering
      const starsGeometry = new THREE.BufferGeometry();
      const starsCount = 2000; // Reduced count for performance
      const posArray = new Float32Array(starsCount * 3);
      for (let i = 0; i < starsCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 200;
      }
      starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const starsMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6
      });
      starsMesh = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(starsMesh);

      // Minimal lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      // Shared interaction logic for mouse and touch
      const startInteraction = (clientX: number, clientY: number) => {
        // completely disable interaction on mobile to allow native scrolling
        if (window.innerWidth < 768) {
          return false;
        }

        // Check if interaction is over banner area
        const bannerElement = document.querySelector('[data-banner="true"]');
        const headerElement = document.querySelector('header');

        // Check if clicking over banner
        if (bannerElement) {
          // Ignore if banner is hidden or non-interactive
          const style = window.getComputedStyle(bannerElement);
          if (style.pointerEvents !== 'none' && style.opacity !== '0' && style.visibility !== 'hidden') {
            const rect = bannerElement.getBoundingClientRect();
            if (clientX >= rect.left && clientX <= rect.right &&
              clientY >= rect.top && clientY <= rect.bottom) {
              return false; // Don't allow globe interaction when over banner
            }
          }
        }

        // Check if clicking over navigation header
        if (headerElement) {
          const rect = headerElement.getBoundingClientRect();
          if (clientX >= rect.left && clientX <= rect.right &&
            clientY >= rect.top && clientY <= rect.bottom) {
            return false; // Don't allow globe interaction when over header
          }
        }


        // Hide banner when clicking on globe
        if (onBannerHiddenChange) {
          onBannerHiddenChange(true);
        }

        isDraggingRef.current = true;
        autoRotateRef.current = false; // Stop auto-rotation when interacting
        mousePosRef.current = { x: clientX, y: clientY };

        // Change cursor to dragging state
        if (mountRef.current) {
          mountRef.current.className = 'absolute inset-0 w-full h-full z-0 globe-cursor-dragging';
        }

        return true;
      };

      // Mouse interaction handlers
      handleMouseDown = (e: MouseEvent) => {
        startInteraction(e.clientX, e.clientY);
      };

      const moveInteraction = (clientX: number, clientY: number) => {
        if (!isDraggingRef.current) return;

        // Check if mouse is over banner area
        const bannerElement = document.querySelector('[data-banner="true"]');
        const headerElement = document.querySelector('header');

        // Check if dragging over banner
        if (bannerElement) {
          // Ignore if banner is hidden or non-interactive
          const style = window.getComputedStyle(bannerElement);
          if (style.pointerEvents !== 'none' && style.opacity !== '0' && style.visibility !== 'hidden') {
            const rect = bannerElement.getBoundingClientRect();
            if (clientX >= rect.left && clientX <= rect.right &&
              clientY >= rect.top && clientY <= rect.bottom) {
              isDraggingRef.current = false; // Stop dragging when over banner
              return;
            }
          }
        }

        // Check if dragging over navigation header
        if (headerElement) {
          const rect = headerElement.getBoundingClientRect();
          if (clientX >= rect.left && clientX <= rect.right &&
            clientY >= rect.top && clientY <= rect.bottom) {
            isDraggingRef.current = false; // Stop dragging when over header
            return;
          }
        }

        const deltaX = clientX - mousePosRef.current.x;
        const deltaY = clientY - mousePosRef.current.y;

        targetRotationRef.current = {
          x: targetRotationRef.current.x + deltaY * 0.01,
          y: targetRotationRef.current.y + deltaX * 0.01
        };

        mousePosRef.current = { x: clientX, y: clientY };
      };

      handleMouseMove = (e: MouseEvent) => {
        moveInteraction(e.clientX, e.clientY);
      };

      const endInteraction = () => {
        // Show banner when releasing click
        if (onBannerHiddenChange) {
          onBannerHiddenChange(false);
        }

        isDraggingRef.current = false;
        // Resume auto-rotation instantly when interaction ends
        autoRotateRef.current = true;

        // Reset cursor to normal state
        const globeArea = mountRef.current;
        if (globeArea) {
          globeArea.className = 'absolute inset-0 w-full h-full z-0 globe-cursor';
        }
      };

      handleMouseUp = () => {
        endInteraction();
      };

      const handleMouseClick = (e: MouseEvent) => {
        if (!camera || !globe || !renderer) return;

        // Get current renderer dimensions
        const width = renderer.domElement.width;
        const height = renderer.domElement.height;

        const mouse = new THREE.Vector2();
        mouse.x = (e.clientX / width) * 2 - 1;
        mouse.y = -(e.clientY / height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(globe);
        if (intersects.length > 0) {
          const point = intersects[0].point;
          const country = getCountryAtPoint(point);
          if (country) {
            setSelectedCountry(country.name);
          }
        }
      };

      const getCountryAtPoint = (point: THREE.Vector3) => {
        const normalizedPoint = point.clone().normalize();
        const lat = Math.asin(normalizedPoint.y) * 180 / Math.PI;
        const lon = Math.atan2(normalizedPoint.x, normalizedPoint.z) * 180 / Math.PI;

        return countryData.find(country => {
          const centerLat = (country.lat[0] + country.lat[1]) / 2;
          const centerLon = (country.lon[0] + country.lon[1]) / 2;
          const latDiff = Math.abs(lat - centerLat);
          const lonDiff = Math.abs(lon - centerLon);
          return latDiff < 20 && lonDiff < 30; // Increased tolerance for easier selection
        });
      };

      const updateCountryLabels = () => {
        if (!globeGroupRef.current || !cameraRef.current || !rendererRef.current) return;

        const tempV = new THREE.Vector3();
        const vectorToCamera = new THREE.Vector3();
        const occupiedRects: { x: number, y: number, w: number, h: number }[] = [];

        // Get current renderer dimensions
        const width = rendererRef.current.domElement.width;
        const height = rendererRef.current.domElement.height;

        // Get globe area position for offset calculation
        const globeArea = mountRef.current;
        const globeRect = globeArea ? globeArea.getBoundingClientRect() : { left: 0 };

        countryData.forEach((country) => {
          const labelDiv = labelRefs.current[country.name];
          const lineDiv = linesRefs.current[country.name];

          if (labelDiv && lineDiv && globeGroupRef.current) {
            tempV.copy(country.position);
            tempV.applyMatrix4(globeGroupRef.current.matrixWorld);

            vectorToCamera.subVectors(cameraRef.current.position, tempV);
            const normal = tempV.clone().normalize();
            const viewDir = vectorToCamera.normalize();
            const dot = normal.dot(viewDir);

            // Hide cards when scrolling down - only show when globe is in view
            const scrollY = window.scrollY;
            const maxScrollForCards = 400; // Cards disappear when deep in service section
            const shouldShowCards = true; // Always show cards for debugging
            const isMobile = window.innerWidth < 768;

            const isVisible = isMobile ? dot > 0.1 : dot > 0.25; // More lenient on mobile

            // Only change cursor when deep in service section (keep pointer-events active)
            if (mountRef.current) {
              if (scrollY >= maxScrollForCards) {
                mountRef.current.style.cursor = 'default';
              } else {
                mountRef.current.style.cursor = 'url("/360.png") 16 16, grab';
              }
            }

            // Only change body cursor when deep in service section
            if (scrollY >= maxScrollForCards) {
              document.body.style.cursor = 'default';
            } else {
              document.body.style.cursor = '';
            }

            // Use same visibility logic for both mobile and desktop
            const shouldProcessCard = isVisible && shouldShowCards;

            if (shouldProcessCard) {
              tempV.project(cameraRef.current);

              // Simple positioning: desktop approach with smaller mobile offsets
              const isMobile = window.innerWidth < 768;

              // Use renderer dimensions for projection with viewport centering
              const x = (tempV.x * 0.5 + 0.5) * width;
              const y = (-(tempV.y * 0.5) + 0.5) * height;

              // Debug projection coordinates
              if (country.name === 'USA') {
                console.log('Projection debug:', {
                  country: country.name,
                  tempV: { x: tempV.x, y: tempV.y },
                  projected: { x, y },
                  width,
                  height,
                  isMobile
                });
              }

              let labelX = x + (isMobile ? 5 : 15);
              let labelY = y - (isMobile ? 8 : 35);
              const labelH = isMobile ? 20 : 50;
              const labelW = isMobile ? 65 : 120;

              // No viewport constraints for mobile - let cards position naturally like desktop

              for (let rect of occupiedRects) {
                if (Math.abs(labelX - rect.x) < (labelW * 0.8) && Math.abs(labelY - rect.y) < (labelH * 0.8)) {
                  labelY = rect.y - labelH - 5;
                }
              }

              occupiedRects.push({ x: labelX, y: labelY, w: labelW, h: labelH });

              lineDiv.style.opacity = '1';
              lineDiv.style.left = `${x}px`;
              lineDiv.style.top = `${y}px`;

              labelDiv.style.opacity = selectedCountry === country.name ? '1' : '0.7';
              const translateX = labelX - x;
              const translateY = labelY - y;

              labelDiv.style.left = `${x}px`;
              labelDiv.style.top = `${y}px`;
              labelDiv.style.transform = `translate(${translateX}px, ${translateY}px)`;
              labelDiv.style.pointerEvents = 'auto'; // Enable interaction when visible
            } else {
              lineDiv.style.opacity = '0';
              labelDiv.style.opacity = '0';
              labelDiv.style.pointerEvents = 'none'; // Disable interaction when hidden
            }
          }
        });
      };

      // Optimized animation loop with throttled label updates
      let frameCount = 0;
      let lastRotationTime = Date.now();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const currentTime = Date.now();
        const deltaTime = currentTime - lastRotationTime;

        // Auto-rotation when not interacting (slower speed with time-based movement)
        if (autoRotateRef.current && !isDraggingRef.current) {
          // Time-based rotation to prevent accumulation
          const rotationSpeed = 0.0005; // Base rotation speed
          const timeFactor = Math.min(deltaTime / 16.67, 2); // Normalize to 60fps, max 2x
          targetRotationRef.current.y += rotationSpeed * timeFactor;

          // Limit rotation to prevent runaway spinning
          targetRotationRef.current.y = targetRotationRef.current.y % (Math.PI * 2);
        }

        // Smooth rotation using refs with damping (higher for more responsive feel)
        const dampingFactor = isDraggingRef.current ? 0.2 : 0.15; // More responsive when dragging
        currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * dampingFactor;
        currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * dampingFactor;

        if (earthGroup) {
          earthGroup.rotation.x = currentRotationRef.current.x;
          earthGroup.rotation.y = currentRotationRef.current.y;
        }

        if (starsMesh) {
          starsMesh.rotation.y -= 0.00005;
        }

        // Update country labels every frame for smoother experience
        updateCountryLabels();

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }

        lastRotationTime = currentTime;
      };

      // Touch event handlers for better mobile/trackpad support
      handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) { // Only handle single touch
          const touch = e.touches[0];
          if (startInteraction(touch.clientX, touch.clientY)) {
            e.preventDefault(); // Prevent scrolling when interacting with globe
          }
        }
      };

      handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 1 && isDraggingRef.current) {
          const touch = e.touches[0];
          moveInteraction(touch.clientX, touch.clientY);
          e.preventDefault(); // Prevent scrolling when dragging globe
        }
      };

      handleTouchEnd = () => {
        endInteraction();
      };

      // Wheel event handler for smoother scroll interactions
      handleWheel = (e: WheelEvent) => {
        // Disable wheel on mobile
        if (window.innerWidth < 768) return;

        // Only handle wheel when over globe area
        const globeArea = mountRef.current;
        if (!globeArea) return;

        const rect = globeArea.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {

          // Stop auto-rotation temporarily
          autoRotateRef.current = false;

          // Resume auto-rotation after a delay
          setTimeout(() => {
            if (!isDraggingRef.current) {
              autoRotateRef.current = true;
            }
          }, 1000);
        }
      };

      // Event listeners with passive options for better performance
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('click', handleMouseClick);

      // Touch events for mobile/trackpad support
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);

      // Wheel event for scroll interactions
      window.addEventListener('wheel', handleWheel, { passive: true });

      // Debounced resize handler to prevent performance issues
      let resizeTimeout: NodeJS.Timeout;
      handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (camera && renderer) {
            // Use actual viewport dimensions with adjusted field of view
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;
            const actualAspectRatio = containerWidth / containerHeight;

            // Adjust field of view based on aspect ratio to prevent distortion
            let fov = 45;
            if (actualAspectRatio < 0.6) {
              // Extreme portrait - reduce vertical FOV
              fov = 30;
            } else if (actualAspectRatio < 1.0) {
              // Portrait - moderate vertical FOV
              fov = 35;
            }

            const isMobile = window.innerWidth < 768;
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

            camera.aspect = actualAspectRatio;
            camera.fov = fov;

            if (isMobile) {
              camera.position.z = 15; // Further back for proper mobile size
              camera.position.x = 0; // Ensure centered horizontally
              camera.position.y = 0; // Ensure centered vertically
            } else if (isTablet) {
              camera.position.z = 20; // Further back for tablet
              camera.position.x = 0;
              camera.position.y = 0;
            } else {
              camera.position.z = 25; // Further back for desktop
              camera.position.x = 0;
              camera.position.y = 0;
            }

            camera.updateProjectionMatrix();
            renderer.setSize(containerWidth, containerHeight);

            // Force update globe size immediately
            updateGlobeSize();
          }
        }, 50); // 50ms debounce
      };

      // Update globe size when scroll changes
      const handleScrollUpdate = () => {
        if (globe) {
          updateGlobeSize();
        }
      };

      window.addEventListener('scroll', handleScrollUpdate);

      const updateGlobeSize = () => {
        if (!globe) return;

        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        let scaleFactor;

        if (isMobile) {
          scaleFactor = 0.8; // Smaller on mobile with further camera
        } else if (isTablet) {
          scaleFactor = 0.7; // Smaller on tablet with further camera
        } else {
          scaleFactor = 1.2; // Smaller on desktop with further camera
        }

        // Add scroll-based scaling - globe grows as you scroll
        const currentScrollY = window.scrollY;
        const scrollScale = Math.min(1 + (currentScrollY * 0.0003), 1.3); // Max 30% growth
        scaleFactor = scaleFactor * scrollScale;

        // Apply scale to globe
        globe.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Update atmosphere if it exists
        if (atmosphere) {
          atmosphere.scale.set(scaleFactor * 1.08, scaleFactor * 1.08, scaleFactor * 1.08);
        }

        console.log('Globe scaled to:', scaleFactor, 'Window width:', window.innerWidth, 'Scroll:', currentScrollY);
      };

      // Start animation
      animate();

      // Set initial globe size based on current window size
      setTimeout(() => {
        updateGlobeSize();
      }, 100);

    } catch (error) {
      console.error('Error initializing Three.js scene:', error);
      cleanup();
    }

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('touchstart', handleTouchStart as any);
      window.removeEventListener('touchmove', handleTouchMove as any);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('wheel', handleWheel as any);
      window.removeEventListener('resize', handleResize);
      // Note: handleScrollUpdate is defined inside useEffect, so we can't remove it here
      cleanup();
    };
  }, [countryData]); // Only depend on countryData

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
          .globe-cursor {
            cursor: url('/360.png') 16 16, grab;
          }
          .globe-cursor-dragging {
            cursor: url('/360.png') 16 16, grabbing;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out 0.5s both;
          }
        `
      }} />

      {/* Globe - Centered on Page */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full z-0 globe-cursor" />

      {/* Dynamic Label Layer */}
      {countryData.map((country) => (
        <React.Fragment key={country.name}>
          <div
            ref={el => { linesRefs.current[country.name] = el; }}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full pointer-events-none transition-opacity duration-300 z-10 shadow-[0_0_10px_#22d3ee]"
            style={{ opacity: 0, transform: 'translate(-50%, -50%)', willChange: 'left, top' }}
          />

          <div
            ref={el => { labelRefs.current[country.name] = el; }}
            className="absolute pointer-events-auto transition-opacity duration-300 z-5 cursor-pointer hover:scale-105"
            style={{
              opacity: 1,
              willChange: 'transform, left, top',
              backgroundColor: 'red',
              border: '2px solid yellow',
              borderRadius: '8px'
            }}
            onClick={() => setSelectedCountry(country.name)}
          >
            <div className={`bg-black/95 backdrop-blur-md border p-1.5 md:p-2 rounded-lg border-l-4 shadow-[0_0_20px_rgba(6,182,212,0.3)] min-w-[65px] md:min-w-[120px] max-w-[80px] md:max-w-[160px] ${selectedCountry === country.name
              ? 'border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)]'
              : 'border-cyan-500/40'
              }`}>
              <div className="flex items-center justify-between mb-1 md:mb-1.5 border-b border-gray-700 pb-1">
                <span className="text-[9px] md:text-[11px] font-bold text-white uppercase tracking-tight">{country.name}</span>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-wrap gap-0.5 md:gap-1">
                {country.standards.map(std => (
                  <span key={std} className="text-[7px] md:text-[9px] text-cyan-100 font-mono bg-cyan-900/60 px-1 md:px-1.5 py-0.5 rounded border border-cyan-500/30">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Footer Info */}
      <div className="absolute bottom-4 right-4 z-30 pointer-events-none text-right hidden md:block">
        <div className="flex flex-col items-end space-y-2">
          <p className="text-cyan-500 text-[10px] font-mono tracking-widest uppercase">Live Surveillance Feed</p>
          <div className="flex space-x-2 text-gray-500 text-xs font-mono bg-black/60 p-2 rounded border border-gray-800 backdrop-blur">
            <span>ACTIVE NODES: {countryData.length}</span>
            <span>|</span>
            <span className="animate-pulse text-green-500">SYSTEM ONLINE</span>
            <span>|</span>
            <span className={`${autoRotateRef.current ? 'text-cyan-400' : 'text-gray-400'}`}>
              {autoRotateRef.current ? 'AUTO-ROTATING' : 'MANUAL CONTROL'}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Optimization - Add touch controls indicator */}
      <div className="absolute top-4 left-4 z-30 pointer-events-none md:hidden">
        <div className="bg-black/60 backdrop-blur-md p-2 rounded border border-cyan-500/30">
          <p className="text-cyan-400 text-[10px] font-mono">Touch to rotate</p>
        </div>
      </div>

    </div>
  );
};

export default CyberGaarGlobe;
