import UserParams from "@src/types/user-params";
import Timeline, { Event } from "@src/types/timeline";
import timelineRepo from "@src/ports/repos/timeline";

const createWelcomeEvent = (userParams: UserParams): Event => ({
  description: `Welcome ${userParams.fullname}!`,
  datetime: new Date(),
});

export default async (userParams: UserParams): Promise<Timeline> => {
  const timeline: Timeline = {
    userId: userParams.userId,
    events: [createWelcomeEvent(userParams)],
  };

  await timelineRepo.insert(timeline);
  return timeline;
};
