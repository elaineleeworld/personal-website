// Jest setup: provide lightweight mocks for canvas and WebGL in JSDOM
// Prevents errors from components that access canvas 2D/WebGL contexts during tests.

if (typeof window !== 'undefined' && typeof window.HTMLCanvasElement !== 'undefined') {
  const proto = window.HTMLCanvasElement.prototype;
  if (!proto.getContext.__isMocked) {
    const originalGetContext = proto.getContext;
    proto.getContext = function (type) {
      if (type === '2d') {
        return {
          fillRect: () => {},
          clearRect: () => {},
          getImageData: (x, y, w, h) => ({ data: new Array(w * h * 4) }),
          putImageData: () => {},
          createImageData: () => [],
          setTransform: () => {},
          drawImage: () => {},
          save: () => {},
          restore: () => {},
          beginPath: () => {},
          moveTo: () => {},
          lineTo: () => {},
          closePath: () => {},
          stroke: () => {},
          fill: () => {},
          measureText: () => ({ width: 0 }),
          transform: () => {},
        };
      }
      if (type === 'webgl' || type === 'experimental-webgl') {
        return {
          getExtension: () => null,
          createProgram: () => ({}),
          createShader: () => ({}),
          shaderSource: () => {},
          compileShader: () => {},
          createBuffer: () => ({}),
          bindBuffer: () => {},
          bufferData: () => {},
        };
      }
      return originalGetContext.apply(this, arguments);
    };
    proto.getContext.__isMocked = true;
  }
}

// Provide a minimal WebGLRenderingContext constructor to satisfy libraries
if (typeof global !== 'undefined' && typeof global.WebGLRenderingContext === 'undefined') {
  global.WebGLRenderingContext = function WebGLRenderingContext() {};
}
