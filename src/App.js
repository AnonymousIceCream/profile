import formal from "./img/dp.jpg";
import profile from "./img/profile.png";
import contact from "./img/contact.png";
import mail from "./img/mail.png";
import exp from "./img/exp.png";
import educ from "./img/educ.png";
import skill from "./img/skill.png";
import proj from "./img/proj.png";
import "./App.css";
function App() {
  return(
    <div>
      <div class="bookmark"> 
        <div class="dp">
          <img src={formal} alt ="IC"/>
          <div class="name">Ivann Calandria</div>
          <div class="profile">
            <img class ="icon" src={profile} alt ="Anonymous"/>
            <div class="l-desc">4th Year IT Student</div>
          </div>
        

          <div class="cp">
            <img class ="icon" src={contact} alt ="Phone"/>
            <div class="l-desc">+639609116829</div>
          </div>
          <div class="mail">
            <img class ="icon" src={mail} alt ="Phone"/>
            <div class="l-desc">icalandria@yahoo.com</div>
          </div>
        </div>
      </div>

      <div class="bookcard">
        <div class="b-icon"><img src={exp} alt ="EXP"/></div> 
        <h2>Experience</h2>
        <div class="bc-card">
          <div class="title">Infant Jesus Academy Antipolo | Immersion Student</div>
          <div class="desc">Converted paper documents into digital files. Organized and categorized digital files. Learned basic troubleshooting for Linux.</div>
        </div>
        <div class="bc-card">
          <div class="title">City Disaster Risk Reduction Management Office - Antipolo City | Immersion Student</div>
          <div class="desc">Converted paper documents from 2015 to 2018 into digital files. Organized backlog of digital files starting from 2015.</div>
        </div>
      </div>

      <div class="bookcard">
        <div class="b-icon"><img src={educ} alt ="Education"/></div> 
        <h2>Education</h2>
        <div class="bc-card">
          <div class="title">University of Santo Tomas</div>
          <div class="date">2018 - Present</div>
          <div class="desc">Bachelor of Science in Information Technology - Web and Mobile Development Track</div>
        </div>
        <div class="bc-card">
          <div class="title">Infant Jesus Academy Antipolo</div>
          <div class="date">2012 - 2018</div>
          <div class="desc">Science, Technology, Engineering, and Mathematics (STEM) Track</div>
        </div>
      </div>

      <div class="card">
        <div class="b-icon"><img src={skill} alt ="Tools"/></div> 
        <h1>Technology Tools</h1>
        <ul>
          <table>
            <tr>
              <td><li>HTML</li><li>CSS</li><li>PHP</li><li>Python</li><li>Java</li><li>Visual Basic</li><li>ReactJS</li></td>
              <td><li>Eclipse IDE</li><li>Android Studio</li><li>Visual Studio Code</li><li>IDLE</li><li>Spyder</li></td>
            </tr>
          </table>
        </ul>
      </div>

      <div class="card">
      < div class="b-icon"><img src={proj} alt ="Projects"/></div> 
        <h1>Projects</h1>
        <ul>
          <table>
            <tr>
              <td><li>Hygieia Health Application</li><li>Urban Orchard Café Ordering System</li><li>SmartCTzen: A Citizen Participatory Portal for SmartCT</li></td>
            </tr>
          </table>
        </ul>
      </div>

    </div>
  );
}

export default App;