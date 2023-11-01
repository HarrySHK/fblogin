// import { useState } from "react";
// import { LoginSocialFacebook } from "reactjs-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";

// function App() {
//   const [profile, setProfile] = useState(null);

//   return (
//     <div>
//       {!profile ? (
//         <LoginSocialFacebook
//           appId="1095603598424353"
//           onResolve={(response) => {
//             console.log(response);
//             setProfile(response.data);
//           }}
//           onReject={(error) => {
//             console.log(error);
//           }}
//         >
//           <FacebookLoginButton />
//         </LoginSocialFacebook>
//       ) : (
//         ""
//       )}

//       {profile ? (
//         <div>
//           <h1>{profile.name}</h1>
//           <h3>{profile.email}</h3>
//           <img src={profile.picture.data.url} />
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { LoginSocialFacebook, LogoutSocial } from "reactjs-social-login"; // Import LogoutSocial
import { FacebookLoginButton } from "react-social-login-buttons";

function App() {
  const [profile, setProfile] = useState(null);

  const handleLogout = () => {
    // Clear the user's profile data
    setProfile(null);

    // Clear Facebook-related cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };

  return (
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="1095603598424353"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button><br /><br />
          <div>
            <img src={profile.picture.data.url} alt={profile.name} /><br />
            <h2><b>USER NAME:</b> {profile.name}</h2>
            <h3><b>USER EMAIL:</b> {profile.email}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;



