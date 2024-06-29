import { NextResponse, type NextRequest } from "next/server";
import flw from "@/lib/flutterwave/config";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  let redirectPath: string | null = null;

  const searchParams = request.nextUrl.searchParams;

  const status = searchParams.get("status");
  const transactionRef = searchParams.get("tx_ref");
  const transactionId = searchParams.get("transaction_id");

  console.log(status, transactionRef, transactionId);

  try {
    if (status === "successful") {
      // query db here
      // const transactionDetails = await flw.Transaction.find({
      //     ref: transactionRef,
      // });
      // console.log(transactionDetails);

      const response = await flw.Transaction.verify({
        id: transactionId,
      });

      if (
        response.data.status === "successful" &&
        response.data.amount === 100 &&
        response.data.currency === "NGN"
      ) {
        // update status on db before redirect
        redirectPath = "/funding?status=success";
      } else {
        // update status on db before redirect
        redirectPath = "/funding?status=failed";
      }
    }
  } catch (error) {
    console.log(error);
    redirectPath = "/funding?status=failed";
  } finally {
    // update status on db before redirect
    if (redirectPath) redirect(redirectPath);
  }
}
