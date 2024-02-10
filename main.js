import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1); // 기하적인 도형을 만들어줌, 3차원이기 때문에 BoxGeometry를 사용
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 스타일링을 할 수 있음
// const cube = new THREE.Mesh(geometry, material); // 3차원의 큐브를 만들었음
// scene.add(cube);

// camera.position.z = 5; // 카메라의 위치를 조정함

// // 해당 함수는 함수 내부에서 재귀적으로 콜백으로 다시 전달되면서 60초마다 call될 수 있는 것임.
// // 브라우저 탭이 비활성화되면 리소스 사용을 중단하므로 setInterval보다 낫다고 할 수 있다
// function animate() {
//   requestAnimationFrame(animate); // 기본적으로 60초마다 scene을 리렌더링하는 효과를 가져온다. 해당 함수는 threeJS의 모듈 코드가 아니라 브라우저의 API 함수라고 봐야 한다
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);
