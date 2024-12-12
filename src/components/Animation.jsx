import Lottie from "lottie-react";
import groovyWalkAnimation from "../components/groovyWalk.json";

export const Animation = () => {
    return (
        <div>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
    )
}