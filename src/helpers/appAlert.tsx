import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const success = (message: string) => {
    toast.success(message, {})
}

const error = (message: string) => {
    toast.error(message, {})
}

const warning = (message: string) => {
    toast.warning(message, {})
}

const appAlert = { success, error, warning }

export default appAlert