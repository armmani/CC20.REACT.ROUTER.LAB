import Card from "../components/Card"

export default function Home() {
  return (
    <Card>
      <div className="bg-white p-8 mx-10 shadow-md">
        <img src="https://feelman.info/html/anri/img/img1.jpg" />
        <p className="text-2xl font-light text-center pt-4">Cup Of Coffee On The Window Sill</p>
        <p className="text-center font-thin text-sm pt-2">from Home</p>
      </div>
    </Card>
  )
}