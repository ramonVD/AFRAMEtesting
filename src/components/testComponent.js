var animationCounter = 0;

AFRAME.registerComponent('boxtest', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
  },

  init: function () {
    var data = this.data;
    var el = this.el;


    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);


  },

  /**
   * Update the mesh in response to property updates.
   */
  update: function (oldData) {
    var data = this.data;
    var el = this.el;

    // If `oldData` is empty, then this means we're in the initialization process.
    // No need to update.
    if (Object.keys(oldData).length === 0) { return; }

    // Geometry-related properties changed. Update the geometry.
    if (data.width !== oldData.width ||
        data.height !== oldData.height ||
        data.depth !== oldData.depth) {
      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height,
                                                                    data.depth);
    }

    // Material-related properties changed. Update the material.
    if (data.color !== oldData.color) {
      el.getObject3D('mesh').material.color = new THREE.Color(data.color);
    }
  },

   remove: function () {
    this.el.removeObject3D('mesh');
  }
});

AFRAME.registerComponent("scale-on-mouseenter", {
  schema: {
    to: {default: new THREE.Vector3(2.5,2.5,2.5), type: 'vec3'},
    from: {defaul: new THREE.Vector3(2,2,2), type: "vec3"},
  },

  init: function() {
    var data = this.data;
    var me = this.el;

    me.addEventListener("mouseenter", function() {
      me.object3D.scale.copy(data.to);
    });

    me.addEventListener("mouseleave", function() {
      me.object3D.scale.copy(data.from);
    });
  }
});

//Need to acount for framerate I guess...
AFRAME.registerComponent("beating-heart", {
  schema: {},

  tick: function() {
    animationCounter += 1;
    if (animationCounter % 60 == 0) {
      this.el.object3D.scale.copy(new THREE.Vector3(2.5,2.5,2.5));
    }
    else if(animationCounter % 80 == 0) {
      this.el.object3D.scale.copy(new THREE.Vector3(2,2,2));
      animationCounter = 0;
    }
  }
});