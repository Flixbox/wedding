import { Text, Title, Image, Alert, Divider } from "@mantine/core";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Flag from "react-world-flags";
import location from "./assets/location.jpg";
import prag from "./assets/prag.jpg";

function App() {
  return (
    <section>
      <Title order={1}>The Wedding of Shorna and Felix</Title>

      <Text>
        We will marry in Tivoli Gardens in Kopenhagen. Here's all the intel
        you'll need:
      </Text>
      <Alert>
        <Text>
          It is not allowed to throw rice, confetti or similar things.
        </Text>
        <Text>
          Don't forget to bring umbrellas, as the weather in Denmark is
          unpredictable.
        </Text>
        <Text>
          Our tickets can be used from when Tivoli opens in the morning until
          Tivoli closes. We have two spare tickets, so several guests will have
          to buy their own tickets.
        </Text>
      </Alert>
      <Text>
        <b>When:</b> We will meet up in Tivoli Park on 2023-05-06 at 16:00 to
        walk around and take pictures. The ceremony will start at 18:00.
      </Text>
      <Text>
        <b>How:</b> We will be married in the small pavilion with the golden
        roof by the lake in <b>Tivoli Gardens</b>.
      </Text>
      <Text>
        <b>Celebration:</b> We will celebrate in <b>Strandvangen Guesthouse</b>{" "}
        on Sunday.
      </Text>
      <br />
      <Divider />
      <Title order={2}>Strandvangen Guesthouse</Title>
      <Text>
        <b>Arrival:</b> 2023-05-03 around 16:00
      </Text>
      <Text>
        <b>Departure:</b> 2023-05-08 around 10:00
      </Text>
      <Text>
        You're free to come and go as you please, and we will have a celebration
        on Sunday. There's enough beds for everyone to stay overnight on several
        days and you're all invited to do so.
        <br />
        You can easily take the train there from Kopenhagen.
      </Text>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.1485876056104!2d12.366060219869006!3d55.60675886669586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465257b9f9e42627%3A0x52af315163dc380a!2sStrandvangen%20Guesthouse!5e0!3m2!1sen!2sde!4v1678663309415!5m2!1sen!2sde"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
      <br />
      <Divider />
      <Title order={2}>Tivoli Gardens</Title>
      <Image src={location} />
      <a href="https://www.tivoli.dk/">Tivoli Gardens Official Website</a>
      <br />
      <a href="https://www.visitdenmark.de/daenemark/erlebnisse/sehenswuerdigkeiten/tivoli-kopenhagen">
        <Flag code="DE" height="16" /> Tivoli Gardens Info
      </a>
      <br />
      <a href="https://www.visitdenmark.com/denmark/plan-your-trip/tivoli-gardens-gdk424504">
        <Flag code="GB" height="16" /> Tivoli Gardens Info
      </a>
      <br />
      <iframe
        src="https://maps.google.com/maps?q=55.674368,12.569168&hl=es;z=14&amp;output=embed"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
      <br />
      <Title order={3}>Tivoli Trailer</Title>
      <LiteYouTubeEmbed
        id="lpeQsxgx3eQ"
        title="Tivoli Gardens"
        noCookie={true}
      />
      <br />
      <br />
      <br />
      <Text>
        Lots of love, <br /> Felix & Shorna
      </Text>
      <Image src={prag} />
    </section>
  );
}

export default App;
