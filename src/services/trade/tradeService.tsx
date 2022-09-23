import endpoints from "../../constants/endpoints";
import Axios from "../../helpers/Axios";
import { BuyCryptoRequest } from "../../interfaces/trade/BuyCryptoRequest";
import { SellCryptoRequest } from "../../interfaces/trade/SellCryptoRequest";

const buyCrypto = async (data: BuyCryptoRequest) => {
    console.log(data)
    const response = await Axios.post(`${endpoints.BUY_CRYPTO_UrL}`, data);

    return response.data;
}

const sellCrypto = async (data: SellCryptoRequest) => {
    console.log(data)
    const response = await Axios.post(`${endpoints.SELL_CRYPTO_URL}`, data);

    return response.data;
}

const tradeService = { buyCrypto, sellCrypto }

export default tradeService