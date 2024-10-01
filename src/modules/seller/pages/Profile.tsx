import { CompletionStats } from "../components/profile/CompletionStats";
import { ProfileTabs } from "../components/profile/ProfileTabs";
function Profile() {
  const userProfileCompletion = 100;
  return (
    <main>
      {userProfileCompletion < 100 && (
        <CompletionStats completion={userProfileCompletion} />
      )}
      <ProfileTabs />
    </main>
  );
}

export default Profile;
