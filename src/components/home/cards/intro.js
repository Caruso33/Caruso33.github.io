import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
class Intro extends Component {
  state = { interval: null, adjective: null, skill: null };

  componentDidMount() {
    const interval = setInterval(this.getChangingText, 2000);
    this.setState({
      interval,
      adjective:
        bangkokAdjectives[this.pickRandomIndex(bangkokAdjectives.length)],
      skill: skillset[this.pickRandomIndex(skillset.length)]
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  pickRandomIndex = length => {
    return Math.floor(Math.random() * length);
  };

  getChangingText = () => {
    const adjectiveIndex = this.pickRandomIndex(bangkokAdjectives.length);
    const skillsetIndex = this.pickRandomIndex(skillset.length);
    this.setState({
      adjective: bangkokAdjectives[adjectiveIndex],
      skill: skillset[skillsetIndex]
    });
  };

  render() {
    const { classes } = this.props;
    const { adjective, skill } = this.state;
    return (
      <Grid item md={8} lg={6} style={{ margin: "20px auto" }}>
        <Typography
          variant="display1"
          component="h3"
          className={classes.Typography}
          gutterBottom
        >
          Hi,
        </Typography>
        <Typography variant="subheading" component="p" gutterBottom>
          my name is Tobias, I am a fullstack developer based in{" "}
          <span className="changing-text">{adjective}</span> Bangkok, Thailand.
        </Typography>

        <Typography variant="subheading" component="p" gutterBottom>
          Originally, I've studied Industrial Management and specialized in IT
          with an thesis related to the field of{" "}
          <a href="https://en.wikipedia.org/wiki/Industry_4.0">Industrie 4.0</a>{" "}
          in a mid-sized German manufacturer.
        </Typography>

        <Typography variant="subheading" component="p" gutterBottom>
          Currently, I work as a Senior Web Developer for{" "}
          <a href="http://appysphere.com/">AppySphere</a>. I enjoy writing code
          and improving myself, always keen in getting more experience in
          various technological fields like{" "}
          <span className="changing-text" style={{ minWidth: 150 }}>
            {skill}
          </span>{" "}
          while giving <span className="linkColor">100%</span> helping you to
          reach your goals.
        </Typography>

        <Typography variant="subheading" component="p" gutterBottom>
          You can find my{" "}
          <a href="https://www.linkedin.com/in/tobias-leinss/">
            <i className="fab fa-linkedin" /> linkedIn profile
          </a>{" "}
          here or switch to my{" "}
          <Link to="/portfolio">
            <i className="fas fa-project-diagram" /> portfolio
          </Link>{" "}
          or{" "}
          <a href="https://github.com/caruso33/">
            <i className="fab fa-github fa-2x" /> GitHub
          </a>
          .
        </Typography>
      </Grid>
    );
  }
}

export default Intro;

const bangkokAdjectives = [
  "beautiful",
  "hot",
  "crowded",
  "delicious",
  "warm-hearted",
  "awesome",
  "modern",
  "ancient",
  "large",
  "small",
  "interesting",
  "boring",
  "exciting",
  "beautiful",
  "ugly",
  "expensive",
  "cheap",
  "polluted",
  "clean",
  "noisy",
  "quiet",
  "calm",
  "crowded",
  "busy",
  "pleasant",
  "unpleasant",
  "warm",
  "cool",
  "huge"
];

const skillset = [
  "Software Development",
  "Web Development",
  "Backend",
  "Blockchain",
  "MongoDB",
  "Git",
  "CSS",
  "HTML5",
  "jQuery",
  "GitHub",
  "Redux",
  "React Native",
  "Gulp.js",
  "API",
  "Solidity",
  "PWA",
  "TypeScript",
  "MobX",
  "Firebase",
  "Ethereum",
  "D3",
  "PyTorch",
  "AI",
  "Internet of Things (IoT)",
  "NodeJs",
  "ReactJs"
];
