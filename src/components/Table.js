import { Component } from 'react';

class Table extends Component {
    render() {
        return(<>
            <div className="pageinfo">
              <h1>Social Medias Table</h1>
              <p>This is a list of social medias in decreasing order of personal rating.</p>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Reason for rating</th>
                  <th>Tier</th>
                </tr>
                <tr>
                  <td><a href="https://www.snapchat.com/">Snapchat</a></td>
                  <td>Great for keeping in touch with all your friends through daily visual communication</td>
                  <td>S</td>
                </tr>
                <tr>
                  <td><a href="https://www.instagram.com/">Instagram</a></td>
                  <td>Also good for seeing what friends are up to and conversing, sometimes artificial though</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td><a href="https://www.messenger.com/">Facebook Messenger</a></td>
                  <td>Best texting app that isn't just directly texting</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td><a href="https://www.piazza.com/">Piazza</a></td>
                  <td>Necessary for news and help for coursework</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td><a href="https://www.twitter.com/">Twitter</a></td>
                  <td>A middle-ground social media which is sometimes funny and sometimes toxic</td>
                  <td>C</td>
                </tr>
                <tr>
                  <td><a href="https://www.facebook.com/">Facebook</a></td>
                  <td>Pretty much obsolete and only useful for Free & For Sale</td>
                  <td>D</td>
                </tr>
                <tr>
                  <td><a href="https://www.tiktok.com/">TikTok</a></td>
                  <td>No reason needed</td>
                  <td>F</td>
                </tr>
              </table>
            </div>
        </>);
    }
}

export default Table;