import Details from "../components/details/Details";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  let hasId = searchParams.get("id");
  if (hasId === null) {
    hasId = localStorage.getItem("documentId");
  }
  // useEffect(() => {
  //   if (hasId === null) {
  //     hasId = localStorage.getItem("documentId");}
  // }, [hasId, navigate]);

  useEffect(() => {
    if (hasId === null) {
      navigate("/store");
    } else {
      navigate(`/details?id=${hasId}`);
    }
  }, [hasId, navigate]);

  const idHandler = async function () {
    const docRef = doc(db, "checkoutData", hasId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      // const paymentId = docSnap.data().sessionId;
      // console.log(paymentId);
      setData(data);
      return data;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const paymentHandler = async function () {
    const data = await idHandler();
    const paymentId = data.sessionId;
    // console.log(paymentId);
    const paymentRef = doc(db, "orders", paymentId);
    const paymentSnap = await getDoc(paymentRef);

    if (paymentSnap.exists()) {
      const paymentStatus = paymentSnap.data().paymentStatus;
      // console.log(paymentStatus);
      return paymentStatus;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const [paymentStatus, setPaymentStatus] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const status = await paymentHandler();
      setPaymentStatus(status);
      setFetching(false);
    };
    fetchData();
  }, [paymentStatus]);
  // console.log(paymentStatus);
  return <>{fetching ? <p>Proszę czekać...</p> : <Details paymentStatus={paymentStatus} orderId={hasId} data={data} />}</>;
}
