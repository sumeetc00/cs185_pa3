import { Component } from 'react';

class Text extends Component {
    render() {
        return (<>
            <div className="pageinfo">
                <h1>Welcome to PR3: Website using React</h1>
                <p>This is Sumeet Chaudhari and I hope you enjoy my page!</p>
                <p>PR3 is focused on converting our website using React.</p><hr/>
                <p>Changes in this PA:</p>
                <ol>
                  <li>Website now uses React.</li><br/>
                </ol><hr/>
                <p>This section is just to add filler space in order to test the scroll functionality.</p>
                <p>Here are some famous quotes:</p>
                <p><i>"The greatest glory in living lies not in never falling, but in rising every time we fall."</i> - Nelson Mandela</p>
                <p><i>"The way to get started is to quit talking and begin doing."</i> - Walt Disney</p>
                <p><i>"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."</i> - Steve Jobs</p>
                <p><i>"If life were predictable it would cease to be life, and be without flavor."</i> - Eleanor Roosevelt </p>
                <p><i>"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."</i> - Oprah Winfrey</p>
                <p><i>"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."</i> - James Cameron</p>
                <p><i>"Life is what happens when you're busy making other plans."</i> - John Lennon</p><hr/>
                <p>Please fill out the following form:</p>
                <form>
                  <label>First name</label><br/>
                  <input type="text"/><br/><br/>
                  <label>Last name</label><br/>
                  <input type="text"/><br/><br/>
                  <label>Do you have any comments?</label><br/>
                  <input name="comment" type="radio"/>
                  <label>Yes</label><br/>
                  <input name="comment" type="radio"/>
                  <label>No</label><br/>
                  <label>If yes, please leave comments below</label><br/>
                  <input type="text"/><br/><br/>
                  <input type="checkbox"/>
                  <label>By checking this box, you consent to the use of the above information</label><br/><br/>
                  <input type="button" value="Submit"/>
                </form>
            </div>
        </>);
    }
}

export default Text;
