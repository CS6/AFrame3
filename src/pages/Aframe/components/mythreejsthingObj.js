

const AFRAME = window.AFRAME;
const THREE = window.THREE;

AFRAME.registerComponent('mythreejsthingObj', {
	schema: {
		color: {
			default: '#000'
		},
	},
	update: function () {
		var material = new THREE.MeshBasicMaterial({
			color: this.data.color,
			wireframe: true
		});
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		this.mesh = new THREE.Mesh(geometry, material);
		this.el.setObject3D('mesh', this.mesh);
	},
	remove: function () {
		this.el.removeObject3D('mesh');
	}
});
