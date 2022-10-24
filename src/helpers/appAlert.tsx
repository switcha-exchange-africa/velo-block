import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const success = (message: string) => {
    toast.success(message, { toastId: 'success' })
}

const error = (message: string) => {
    toast.error(message, { toastId: 'error' })
}

const warning = (message: string) => {
    toast.warning(message, {})
}

const appAlert = { success, error, warning }

export default appAlert