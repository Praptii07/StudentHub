import { auth, provider, signInWithPopup, signOut } from '../firebase';
import { useState } from 'react';

export default function LoginButton({ user, setUser }) {
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error('Login failed:', error);
            alert('Failed to sign in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
            alert('Failed to sign out. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={user ? handleLogout : handleLogin}
            disabled={loading}
            className={`btn ${user ? 'btn-danger' : 'btn-primary'} ${loading ? 'disabled' : ''}`}
        >
            {loading ? (
                <>
                    <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Processing...
                </>
            ) : user ? (
                `Logout (${user.displayName})`
            ) : (
                'Login with Google'
            )}
        </button>
    );
}
