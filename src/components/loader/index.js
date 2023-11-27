import "./loader.scss"
import Loading from "../svg/loading";

const Loader = props => {
    return (
        <div
            className={`loader`}
        >
            <div className="loading"><Loading/></div>
            <div className="text-capitalize text-center">{props.message}</div>
        </div>
    );
};

export default Loader;

Loader.defaultProps = {
    message: "Loading please wait..."
}
