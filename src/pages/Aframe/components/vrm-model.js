

import { VRM } from '@pixiv/three-vrm'

const AFRAME = window.AFRAME;
const THREE = window.THREE;

AFRAME.registerComponent('VRMcomponent', {
  schema: {
    src: { type: 'string' }
  },
  init() {
    const loader = new THREE.GLTFLoader()
    loader.load(
      this.data.src,
      gltf => {
        VRM.from(gltf).then(vrm => {
          this.el.object3D.add(vrm.scene)
        })
      },
      progress => {
        console.log(
          'Loading model...',
          100.0 * (progress.loaded / progress.total),
          '%'
        )
      },
      error => console.error(error)
    )
  }
})
