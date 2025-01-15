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

export default function MyCard() {
  return (
    <div className="w-[40%] mx-auto mt-[200px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="border border-3">
            <span className="flex justify-start items-center gap-4 text-[20px]">
              <FaCcVisa className="text-[30px]" /> Jenny Rosen
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle className="border border-black p-8">
                  <div className="flex flex-col gap-20">
                    <RiVisaLine  className="text-[5rem] self-end"/>
                    <p className="text-[1.8rem] tracking-[0.5rem]">**** **** **** 0153</p>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-3">
                        <h4 className="font-light">Cardholder</h4>
                        <h4 className="text-[14px]">Mohamed</h4>
                        </div>
                      <div className="flex flex-col gap-3">
                      <h4 className="font-light">Expiry date</h4>
                      <h4 className="text-[14px]">16/4</h4>
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
                  <body className="px-8">
                    <tr>
                      <td >Card number</td>
                      <td >**** **** **** 0153</td>
                    </tr>
                    <tr>
                      <td>CVV</td>
                      <td>***</td>
                    </tr>
                    <tr>
                      <td>Expiration</td>
                      <td>10/2025</td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td className="flex gap-1">Visa<FaCcVisa className="text-[20px]" /></td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td><Badge variant="outline">Active</Badge></td>
                    </tr>
                    <tr>
                      <td>Cardholder</td>
                      <td>Mohamed</td>
                    </tr>
                    <tr>
                      <td>Card type</td>
                      <td>Virtual</td>
                    </tr>
                    <tr>
                      <td>Created at</td>
                      <td>Nov,15.2023</td>
                    </tr>
                    <tr>
                      <td>Billing address</td>
                      <td>123 main street<br/>San Francisco</td>
                    </tr>
                  </body>
                </table>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-4 mx-auto">
                <Button className="" size='lg' variant="outline">Freeze card</Button>
                <Button variant="outline">Replace card</Button>
                <Button variant="outline">Cancel card</Button>
                </div>
              </CardFooter>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
