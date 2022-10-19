import { User } from "./User";

export interface AuthState {
    user: User | null;
    token: null | string;
    isLoading?: boolean;
    error: any;
    isEmailVerified: boolean | any
}