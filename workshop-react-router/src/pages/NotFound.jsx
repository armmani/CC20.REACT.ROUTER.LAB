import Card from "../components/Card"

export default function NotFound() {
  return (
    <Card>
      <div className="text-center">
        <h1 className="text-[36px] border-dotted">404 PAGE NOT FOUND</h1>
        <p>The requested page could not be found or it is currently unavailable. Please click here to go back to our home page or use the search form below.</p>
      </div>
    </Card>
  )
}