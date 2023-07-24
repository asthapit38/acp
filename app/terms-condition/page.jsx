import Image from "next/image";
import Container from "../components/ui/Container";
import AcpLogo from "@/public/images/logos/acp-logo.svg";
import NcpLogo from "@/public/images/logos/nctpl.png";
export const metadata = {
  title: "Terms & Condition | ACP",
};

const Page = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-5">
        <h2 className="text-2xl font-bold text-primary font-title">
          Terms and Condition
        </h2>
        <div className="relative flex items-center justify-between my-5">
          <Image src={AcpLogo} width={256} />
          <Image src={NcpLogo} width={300} />
        </div>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Export Proceedings</h6>
          <p>
            As Association for Craft Producers (ACP) is a non-governmental
            organization, ACP does not have an exporting license as per Nepal
            Government Rule. Hence, ACP established a sister company: Nepali
            Craft Trading Pvt. Ltd. (NCT). All export activities are taken care
            by NCT. NCT will deal directly with the international
            partners/buyers to process orders or any other export concerns.
          </p>
          <p>
            NCT works closely with international buyers to meet their shipping
            needs. Be it by air, land, and/or sea, they have strong working
            relationships with preferred shipping companies and can offer low
            negotiated rates. They can also accommodate to work with a buyers'
            preferred shipping company, as well as coordinate with the shipping
            schedule of products from other companies.
          </p>
          <p>
            For more information regarding shipping concerns or how to place an
            order, please contact export@craftacp.org.np
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Order and Sample Request</h6>
          <p>
            Orders must be placed in a written form. Product code, description,
            size, colors and all specifications should be written in the order.
            If possible, pictures of ordered products should be sent as a
            reference for correct identification. Any variations to pictures
            should clearly be stated in the order. The cost for the development
            and production of a sample is to be borne by the buyer.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Order confirmation</h6>
          <p>
            Once the products are identified, prices and delivery dates are
            confirmed. NCT sends a Proforma Invoice as confirmation of the
            order.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Prices</h6>
          <p>
            Prices are FOB (Free On Board). FOB point is FOB Kathmandu. Prices
            quoted either in US Dollars or Euro and are valid for three months
            from the date mentioned on the quotation. For each order, prices
            must be confirmed. Any other costs such as shipment costs,
            customized tags/labels, insurance, taxes, duties or import fees are
            to be borne by the buyer.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Payment</h6>
          <p>
            Unless otherwise agreed, payments are to be made in United States
            Dollars or Euro. 50% advance payment is required on order
            confirmation (Proforma Invoice). The remaining 50% payment is due
            two weeks before the delivery time. NCT will send a Commercial
            Invoice to confirm the outstanding payment to the customer two weeks
            before the shipment. As per the Regulation of the Government of
            Nepal, 100% advance payment should be made before the shipment and
            the Advance Payment Certificate issued by the bank, needs to be
            presented at Custom to ship goods out of Nepal. Bank details are
            given in the proforma and commercial invoice.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Mode of Payment</h6>
          <p>
            Payments are to be made through SWIFT transfer. A letter of credit
            for orders above US $ 50,000 or equal value in Euro are accepted.
            Cash payments and personal cheques are not accepted for Direct
            Exports.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Delivery term</h6>
          <p>
            Normally Land/ Air Shipment is more than 45 kgs unless they are
            samples. The buyer specifies the nearest airport and any special
            documents that are required. NCT provides the following documents:
            invoice, packing list and the certificate of origin. If NCT is able
            to anticipate delay in the delivery date, NCT will immediately
            inform the buyer in writing of the reasons and will inform the new
            delivery date. The buyer can withdraw from the contract if NCT is
            responsible for the delivery date not being met and the buyer
            allowed NCT a reasonable period of grace without result.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Lead time</h6>
          <p>
            The minimum lead time for production is three months. Sample
            requests are attended to and sent as soon as possible.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Minimum Quantity</h6>
          <p>
            It depends upon the products/raw materials/colors of the ordered
            products. The minimum order value is 1000 US Dollars or equivalent
            amount in Euro.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">
            Products and Design Properties
          </h6>
          <p>
            As products are handmade variations in the design may occur. Our own
            deigns and collection not exclusive to one customer. But the
            customized designs of buyers will be exclusive to the respective
            buyers.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Shipment</h6>
          <p>
            For sample shipment, NCT usually uses couriers (e.g. UPS, FedEx, DHL
            and Aramex). Big consignments can be shipped by air or by land-sea
            depending upon the weight/volume of the shipment. The cost of
            transportation is to be borne by the buyer. NCT is liable for secure
            and adequate packing and documentation. Buyers can appoint their own
            cargo agent or use NCT’s regular cargo agent.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Insurance</h6>
          <p>Insurance has to be arranged by the buyer if required.</p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">
            Modification of the terms and conditions
          </h6>
          <p>
            There are no other agreements or understandings between the buyer
            and NCT that are not fully expressed in these terms and conditions
            in oral or written form. Any changes to these Terms and Conditions
            need to be in written form and confirmed by both parties.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">
            Governing Law/Settlements of disputes
          </h6>
          <p>
            These Terms and Conditions shall be governed and constructed in
            accordance of the laws of Nepal currently in force. Any disputes
            relating to these Terms and Conditions will be subject to the
            jurisdiction of the courts of Kathmandu, Nepal, unless they are not
            settled amicably by mutual consent.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Warranties/Liability</h6>
          <p>
            NCT does not grant any warrantee on the delivered goods. Any
            problems that might occur with the goods will be tried to settle in
            mutual agreement between the buyer and NCT.
          </p>
        </article>
        <article className="space-y-3">
          <h6 className="font-bold text-primary">Force Majeure</h6>
          <p>
            NCT cannot be held liable for any failure or delay in delivering the
            products caused by a) natural catastrophes (floods, earthquakes,
            fires etc.), b) strikes, c) delays by suppliers of raw material, d)
            delays or nonperformance of transportation carriers or e) any other
            unpredictable, unavoidable and serious events.
          </p>
        </article>
      </div>
    </Container>
  );
};

export default Page;
