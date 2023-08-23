import { getAuthSession } from "./auth";
import { prisma } from "./db";
export const dynamic = "force-dynamic"
const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const checkSubscription = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return false;
  }
  const userSubscription = await prisma.userSubscription.findUnique({
    where: {
      userId: session.user.id,
    },
  });
  if (!userSubscription) {
    return false;
  }

  // user sub must have stripe price id and current period end + 1 day is greater than data. now then they have not expired
  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};