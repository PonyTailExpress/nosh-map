const imgURL = 'https://c.tenor.com/hWLlm9zQEscAAAAC/tenor.gif';

function AboutPage() {
    return (
        <div className="about-us-container">

        <section className="mission">
            <h2>Our Mission</h2>
            <p>
                Our mission is simple: to help food lovers discover, save, and easily book tables at the fave restaurants without hassle. Because who has time for bad meals?
            </p>
            </section>    
        <h1>About Nosh Map</h1>
        <p>Welcome to Nosh Map! The ultimate app for food lovers who never want to miss out on their favorite eats! Whether it’s a hidden gem or a top-tier hotspot, Nosh Map lets you bookmark the best restaurants and eateries in town. But we don’t stop there—we make it super easy for you to scoot over and book a table without the hassle. Think of us as your trusty sidekick in the quest for the perfect meal, guiding you to mouth-watering recommendations and ensuring you never miss a bite. So go ahead, add your favorite spots, make those reservations, and let’s turn every meal into a delicious adventure!</p>

        <section className="my-story">
            <h1>The Story</h1>
            <p>
            It all started on a cold wintery Sunday afternoon. Bored of bathing in endless baths of spaghetti hoops, I decided to make an app that would help me solve the a foodie dilemma - to store all my fave nosh places under one place and have the ability to quickly acces details and book a table and voila..the Nosh Map was born!    
            </p>
        </section>
        <img src={imgURL} alt="coffee-gif" />
       </div>
    )
}

export default AboutPage;