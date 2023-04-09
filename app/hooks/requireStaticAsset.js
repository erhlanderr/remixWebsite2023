import isServer from '../isServer';

const requireStaticAsset = (asset) => {
    if(isServer) {
        return asset;
    } else {
        return require(asset);
    }
}

export default requireStaticAsset;