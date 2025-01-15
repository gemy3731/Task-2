import { Badge } from "./ui/badge";
import data from "../transactionsData/transactionsData.json";
import { FaCcVisa } from "react-icons/fa";
import { Button } from "./ui/button";
import { RxDotsVertical } from "react-icons/rx";
export default function Transactions() {
  return (
    <div className="w-[60%] mx-auto mt-[200px]">
      <div className="px-11 py-4 flex flex-col md:flex-row gap-3 justify-between">
      <div className="flex flex-col md:flex-row gap-2">
          <Button className="border-0" variant="outline">Transactions</Button>
          <Button className="border-0" disabled variant="outline">Issued cards</Button>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Button className="border-black" disabled variant="outline">Download</Button>
          <Button className="border-black" disabled variant="outline">Filter</Button>
        </div>
      </div>
      <table className="transactionsTable text-center  w-full">
        <thead>
          <tr>
            <th>Card number</th>
            <th>Status</th>
            <th>Cardholder</th>
            <th>Expiration date</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((transaction) => (
            <tr>
              <td className="py-5">
                <div className="flex gap-1 justify-center">
                  <FaCcVisa className="text-[20px]" />
                  **** {transaction.last4}
                </div>
              </td>
              <td className="py-5">
                <Badge variant="outline">{transaction.status}</Badge>
              </td>
              <td className="py-5">{transaction.cardholder}</td>
              <td className="py-5">{transaction.ExpirationDate}</td>
              <td className="py-5">
                <div className="flex justify-center items-center gap-3">
                {transaction.created}
                <RxDotsVertical  className="cursor-pointer"/>
                </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-11 py-4 flex flex-col md:flex-row gap-3 justify-between">
        <p>Viewing 1-10 of 100 results</p>
        <div className="flex flex-col md:flex-row gap-2">
          <Button className="border-black" disabled variant="outline">Previous</Button>
          <Button className="border-black" disabled variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
