import { useContext, useMemo } from 'react';
import SessionContext from 'react-storefront/session/SessionContext';

function useLoginStatus() {
    const { session } = useContext(SessionContext);
    const isLoggedIn = Boolean(session.signedIn);
    return isLoggedIn;
}

export default useLoginStatus;