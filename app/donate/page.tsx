import DonateClient from "./DonateClient";
import { getPayPalClientConfig } from "@/lib/paypal";

export default function DonatePage() {
  const config = getPayPalClientConfig();

  return <DonateClient {...config} />;
}
