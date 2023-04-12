import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {
    const PATH = "/static/textures/door/"

    const props = useTexture({
        map: PATH + "Sci_fi_Metal_Panel_002_basecolor.jpg",
        displacementMap: PATH + 'Sci_fi_Metal_Panel_002_height.png',
        normalMap: PATH + 'Sci_fi_Metal_Panel_002_normal.jpg',
        roughnessMap: PATH + 'Sci_fi_Metal_Panel_002_roughness.jpg',
        aoMap: PATH + 'Sci_fi_Metal_Panel_002_ambientOcclusion.jpg',
        metalnessMap: PATH + 'Sci_fi_Metal_Panel_002_metallic.jpg'
    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12}>
            <boxGeometry args={[2, 2, 2, 2]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}