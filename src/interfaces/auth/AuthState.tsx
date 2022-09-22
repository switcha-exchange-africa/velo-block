import { User } from "./User";

export interface AuthState {
    user: User | null;
    token: string;
    isLoading: boolean;
    error: any;
    isEmailVerified: boolean | any
}