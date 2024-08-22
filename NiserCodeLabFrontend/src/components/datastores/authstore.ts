import { create } from 'zustand'
import { useNavigate } from 'react-router-dom';


interface AuthStore {
    token: string | null
    setToken: (token: string | null) => void
    login: (username: string, password: string) => void
    logout: () => void
}
const navigate = useNavigate();
const useAuthStore = create<AuthStore>((set) => ({
    token: null,
    
    setToken: (token) => set({ token }),
    logout: () => {

        fetch("/customuserlogout", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response)
        })
        set({ token: null })

    },
    login: async (username, password) => {
        const response = await fetch("/customuserlogin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        const data = await response.json()

        if (data.token && response.ok) {
            set({ token: data.token })
            navigate("/dashboard")
    }}
}))

export default useAuthStore