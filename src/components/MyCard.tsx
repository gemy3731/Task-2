import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

import { FaCcVisa } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { cardI } from "../interfaces/cardI";

export default function MyCard() {
  const [data, setData] = useState<cardI>()
  useEffect(() => {
    getCardData();
  }, [])
  
  const getCardData = async ()=>{
    const response = await fetch('https://www.bakarcompany.somee.com/api/IssueCard/get-card-data');
    const cardData:cardI = await response.json();
    setData(cardData);
    console.log(data);
  }

  return (
    <div className="w-[40%] mx-auto mt-[200px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="border border-3">
            <span className="flex justify-start items-center gap-4 text-[20px]">
              <FaCcVisa className="text-[30px]" /> {data?.cardholderName}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle className="border border-black p-8">
                  <div className="flex flex-col gap-20">
                    <RiVisaLine  className="text-[5rem] self-end"/>
                    <p className="text-[1.8rem] tracking-[0.5rem]">**** **** **** {data?.last4}</p>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-3">
                        <h4 className="font-light">Cardholder</h4>
                        <h4 className="text-[14px]">{data?.cardholderName}</h4>
                        </div>
                      <div className="flex flex-col gap-3">
                      <h4 className="font-light">Expiry date</h4>
                      <h4 className="text-[14px]">{data?.expiryMonth}/{data?.expiryYear.toString().substring(2)}</h4>
                      </div>
                      <div className="flex flex-col gap-3">
                      <h4 className="font-light">CVC</h4>
                      <h4 className="text-[14px]">***</h4>
                      </div>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full cardBody">
                  <tbody className="px-8">
                    <tr>
                      <td >Card number</td>
                      <td >**** **** **** {data?.last4}</td>
                    </tr>
                    <tr>
                      <td>CVV</td>
                      <td>***</td>
                    </tr>
                    <tr>
                      <td>Expiration</td>
                      <td>{data?.expiryMonth}/{data?.expiryYear}</td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td className="flex gap-1">{data?.brand}<FaCcVisa className="text-[20px]" /></td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td><Badge variant="outline">Active</Badge></td>
                    </tr>
                    <tr>
                      <td>Cardholder</td>
                      <td>{data?.cardholderName}</td>
                    </tr>
                    <tr>
                      <td>Card type</td>
                      <td>Virtual</td>
                    </tr>
                    <tr>
                      <td>Created at</td>
                      <td>Nov 15, 2023, 9:32 PM</td>
                    </tr>
                    <tr>
                      <td>Billing address</td>
                      <td>123 main street<br/>San Francisco, CA, 94111, US</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-4 mx-auto">
                <Button size='lg' variant="outline">Freeze card</Button>
                <Button size='lg' variant="outline">Replace card</Button>
                <Button size='lg' variant="outline">Cancel card</Button>
                </div>
              </CardFooter>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
