import { Card } from "react-bootstrap";


function MyImageCard({ details }) {

  const country = details.nat;
  console.log(country);
  const countryCode = country?.toLowerCase()
  console.log(countryCode);


  const flagUrl = `https://flagcdn.com/256x192/${countryCode}.webp`;
  console.log(flagUrl)
   
  return (
    <Card>
      <Card.Body className="text-center">
        <img crossOrigin="anonymous"  src={flagUrl}  />
      </Card.Body>
    </Card>
  );
}

export default MyImageCard;
