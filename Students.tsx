import * as React from 'react';
import './style.css';

export default function Data() {

const [data, setData] = React.useState([
{"id":1,"name":"Judi","email":"jdenajera0@hao123.com","gender":"Female","year":8,"gpa":4.2},
{"id":2,"name":"Shanan","email":"sgeere1@techcrunch.com","gender":"Male","year":5,"gpa":5.9},
{"id":3,"name":"Ara","email":"ashakelady2@xrea.com","gender":"Female","year":8,"gpa":9.0},
{"id":4,"name":"Gery","email":"gcobbe3@pinterest.com","gender":"Male","year":6,"gpa":7.4},
{"id":5,"name":"Efren","email":"ederisley4@mediafire.com","gender":"Male","year":4,"gpa":7.9},
{"id":6,"name":"Brandais","email":"briccardini5@ning.com","gender":"Female","year":2,"gpa":9.0},
{"id":7,"name":"Myra","email":"mpreator6@biblegateway.com","gender":"Female","year":1,"gpa":6.1},
{"id":8,"name":"Bettine","email":"bloxston7@home.pl","gender":"Female","year":9,"gpa":9.9},
{"id":9,"name":"Adolf","email":"akavanagh8@nhs.uk","gender":"Male","year":1,"gpa":7.1},
{"id":10,"name":"Peter","email":"pmarple9@free.fr","gender":"Male","year":3,"gpa":3.2},
{"id":11,"name":"Aurore","email":"achalkea@bigcartel.com","gender":"Female","year":1,"gpa":9.3},
{"id":12,"name":"Desi","email":"dgeggieb@printfriendly.com","gender":"Male","year":7,"gpa":8.7},
{"id":13,"name":"Fielding","email":"fcowsbyc@taobao.com","gender":"Male","year":8,"gpa":4.1},
{"id":14,"name":"Misty","email":"mmaccartneyd@wikispaces.com","gender":"Agender","year":9,"gpa":9.2},
{"id":15,"name":"Barris","email":"bleishmane@stanford.edu","gender":"Male","year":9,"gpa":4.9},
{"id":16,"name":"Melly","email":"mknockf@hud.gov","gender":"Female","year":5,"gpa":5.5},
{"id":17,"name":"Doralyn","email":"dmcquilling@istockphoto.com","gender":"Non-binary","year":8,"gpa":8.1},
{"id":18,"name":"Aurelia","email":"awapleh@wikispaces.com","gender":"Female","year":8,"gpa":8.9},
{"id":19,"name":"Cora","email":"csturridgei@spotify.com","gender":"Female","year":7,"gpa":6.1},
{"id":20,"name":"Free","email":"fallpressj@miitbeian.gov.cn","gender":"Male","year":6,"gpa":3.4},
{"id":21,"name":"Lou","email":"lschulek@tamu.edu","gender":"Male","year":2,"gpa":6.4},
{"id":22,"name":"Wallas","email":"wfarrandl@histats.com","gender":"Male","year":3,"gpa":3.2},
{"id":23,"name":"Barret","email":"bmcclymondm@omniture.com","gender":"Bigender","year":9,"gpa":5.8},
{"id":24,"name":"Ezri","email":"efransesn@chronoengine.com","gender":"Male","year":1,"gpa":5.8},
{"id":25,"name":"Joanna","email":"jpogsono@devhub.com","gender":"Female","year":7,"gpa":8.5},
{"id":26,"name":"Seline","email":"scallowayp@dot.gov","gender":"Female","year":2,"gpa":4.7},
{"id":27,"name":"Marje","email":"mhousecraftq@nature.com","gender":"Bigender","year":8,"gpa":9.1},
{"id":28,"name":"Parke","email":"pauberyr@facebook.com","gender":"Male","year":6,"gpa":6.8},
{"id":29,"name":"Debbi","email":"ddumphreyss@fema.gov","gender":"Female","year":2,"gpa":4.5},
{"id":30,"name":"Christy","email":"csummerhayest@google.es","gender":"Male","year":2,"gpa":5.1},
{"id":31,"name":"Charlene","email":"ctooneu@posterous.com","gender":"Female","year":8,"gpa":6.6},
{"id":32,"name":"Jeffrey","email":"jpammenterv@google.com.hk","gender":"Male","year":3,"gpa":8.4},
{"id":33,"name":"Chiarra","email":"cnewtownw@blogtalkradio.com","gender":"Female","year":8,"gpa":7.4},
{"id":34,"name":"Artur","email":"aeyreex@theguardian.com","gender":"Male","year":5,"gpa":4.6},
{"id":35,"name":"Miguelita","email":"maldhamy@storify.com","gender":"Female","year":9,"gpa":3.7},
{"id":36,"name":"Erick","email":"egellyz@homestead.com","gender":"Bigender","year":2,"gpa":3.5},
{"id":37,"name":"Meryl","email":"mmconie10@earthlink.net","gender":"Female","year":8,"gpa":4.7},
{"id":38,"name":"Irena","email":"icreese11@ning.com","gender":"Female","year":3,"gpa":4.6},
{"id":39,"name":"Kalie","email":"kclancey12@seattletimes.com","gender":"Female","year":4,"gpa":3.2},
{"id":40,"name":"Kattie","email":"kalleway13@prlog.org","gender":"Genderfluid","year":7,"gpa":4.9},
{"id":41,"name":"Garv","email":"gwatkiss14@howstuffworks.com","gender":"Male","year":4,"gpa":8.4},
{"id":42,"name":"Vin","email":"vredhead15@histats.com","gender":"Genderqueer","year":5,"gpa":4.2},
{"id":43,"name":"Ardys","email":"amarsham16@upenn.edu","gender":"Female","year":5,"gpa":9.4},
{"id":44,"name":"Zena","email":"zwadmore17@joomla.org","gender":"Female","year":9,"gpa":3.3},
{"id":45,"name":"Quint","email":"qabrahamoff18@wordpress.com","gender":"Male","year":3,"gpa":5.8},
{"id":46,"name":"Morgan","email":"mpremble19@bloglovin.com","gender":"Female","year":2,"gpa":7.3},
{"id":47,"name":"Prinz","email":"pgouny1a@baidu.com","gender":"Male","year":8,"gpa":4.8},
{"id":48,"name":"Woody","email":"wbaynard1b@umich.edu","gender":"Male","year":4,"gpa":4.9},
{"id":49,"name":"Granthem","email":"gmiddlemass1c@virginia.edu","gender":"Male","year":4,"gpa":4.4},
{"id":50,"name":"Blake","email":"bstracey1d@woothemes.com","gender":"Female","year":4,"gpa":3.1},
{"id":51,"name":"Nobe","email":"nbutton1e@apple.com","gender":"Male","year":8,"gpa":4.5},
{"id":52,"name":"Rosemarie","email":"rchaikovski1f@wiley.com","gender":"Female","year":5,"gpa":6.4},
{"id":53,"name":"Seana","email":"svlies1g@wisc.edu","gender":"Agender","year":1,"gpa":3.8},
{"id":54,"name":"Marjie","email":"mmcdowell1h@goo.gl","gender":"Genderqueer","year":9,"gpa":6.0},
{"id":55,"name":"Boyd","email":"bwaine1i@howstuffworks.com","gender":"Male","year":9,"gpa":5.5},
{"id":56,"name":"Camila","email":"crosenqvist1j@gravatar.com","gender":"Bigender","year":8,"gpa":9.8},
{"id":57,"name":"Annora","email":"ablaby1k@ebay.co.uk","gender":"Female","year":9,"gpa":7.0},
{"id":58,"name":"Joli","email":"jwaterhous1l@wordpress.com","gender":"Bigender","year":8,"gpa":7.6},
{"id":59,"name":"Cordelie","email":"cduggen1m@businessweek.com","gender":"Female","year":3,"gpa":5.4},
{"id":60,"name":"Ingaborg","email":"iboothjarvis1n@businessweek.com","gender":"Female","year":6,"gpa":8.9},
{"id":61,"name":"Dukey","email":"dhinksen1o@loc.gov","gender":"Male","year":5,"gpa":3.2},
{"id":62,"name":"Shauna","email":"sgarralts1p@artisteer.com","gender":"Genderqueer","year":9,"gpa":7.1},
{"id":63,"name":"Nerty","email":"ntredger1q@feedburner.com","gender":"Female","year":9,"gpa":5.8},
{"id":64,"name":"Marylou","email":"mkedslie1r@mapquest.com","gender":"Female","year":5,"gpa":5.4},
{"id":65,"name":"Sean","email":"swyld1s@purevolume.com","gender":"Female","year":8,"gpa":9.7},
{"id":66,"name":"Vachel","email":"vlaslett1t@naver.com","gender":"Male","year":8,"gpa":7.2},
{"id":67,"name":"Hilde","email":"hbarrett1u@latimes.com","gender":"Female","year":8,"gpa":8.8},
{"id":68,"name":"Kelci","email":"kdawidsohn1v@ask.com","gender":"Genderqueer","year":7,"gpa":4.7},
{"id":69,"name":"Orlan","email":"ocavaney1w@bbb.org","gender":"Male","year":6,"gpa":9.5},
{"id":70,"name":"Jo-ann","email":"jlockyer1x@webmd.com","gender":"Female","year":6,"gpa":7.6},
{"id":71,"name":"Germaine","email":"gchristoffels1y@sogou.com","gender":"Female","year":9,"gpa":8.2},
{"id":72,"name":"Roosevelt","email":"rbickerstaffe1z@nytimes.com","gender":"Male","year":3,"gpa":5.4},
{"id":73,"name":"Conni","email":"clongmead20@reverbnation.com","gender":"Female","year":5,"gpa":5.9},
{"id":74,"name":"Pier","email":"pzanneli21@vkontakte.ru","gender":"Female","year":7,"gpa":4.0},
{"id":75,"name":"Leola","email":"lwoodhouse22@i2i.jp","gender":"Female","year":4,"gpa":9.6},
{"id":76,"name":"Dorena","email":"dritchley23@rediff.com","gender":"Female","year":4,"gpa":4.5},
{"id":77,"name":"Jacobo","email":"jattard24@skyrock.com","gender":"Male","year":3,"gpa":5.9},
{"id":78,"name":"Arty","email":"afinlay25@seattletimes.com","gender":"Male","year":3,"gpa":5.0},
{"id":79,"name":"Mela","email":"mzelake26@marketwatch.com","gender":"Female","year":9,"gpa":8.5},
{"id":80,"name":"Elita","email":"efraney27@unesco.org","gender":"Female","year":8,"gpa":7.5},
{"id":81,"name":"Emyle","email":"eplumley28@phpbb.com","gender":"Female","year":5,"gpa":5.7},
{"id":82,"name":"Donny","email":"dvowells29@xinhuanet.com","gender":"Male","year":9,"gpa":6.0},
{"id":83,"name":"Daryle","email":"drizzetti2a@acquirethisname.com","gender":"Male","year":5,"gpa":5.8},
{"id":84,"name":"Dame","email":"dpedrocco2b@opera.com","gender":"Male","year":6,"gpa":6.6},
{"id":85,"name":"Farra","email":"fleivers2c@naver.com","gender":"Female","year":5,"gpa":6.2},
{"id":86,"name":"Danni","email":"dlawfull2d@about.com","gender":"Female","year":1,"gpa":6.7},
{"id":87,"name":"Kippar","email":"kradage2e@drupal.org","gender":"Male","year":1,"gpa":4.5},
{"id":88,"name":"Davin","email":"dbuckler2f@ucsd.edu","gender":"Male","year":1,"gpa":9.7},
{"id":89,"name":"Noe","email":"nbayston2g@craigslist.org","gender":"Male","year":9,"gpa":6.0},
{"id":90,"name":"Farica","email":"fstapele2h@about.com","gender":"Polygender","year":6,"gpa":8.9},
{"id":91,"name":"Addie","email":"acarding2i@list-manage.com","gender":"Male","year":8,"gpa":9.4},
{"id":92,"name":"Dylan","email":"dcotes2j@jiathis.com","gender":"Male","year":3,"gpa":8.6},
{"id":93,"name":"Ikey","email":"iwolfindale2k@hibu.com","gender":"Male","year":6,"gpa":6.0},
{"id":94,"name":"Agata","email":"ahayfield2l@ft.com","gender":"Female","year":7,"gpa":7.8},
{"id":95,"name":"Amalia","email":"asawter2m@weather.com","gender":"Female","year":3,"gpa":8.3},
{"id":96,"name":"Lindy","email":"lsimoens2n@arizona.edu","gender":"Male","year":3,"gpa":7.0},
{"id":97,"name":"Emelia","email":"elyall2o@dailymail.co.uk","gender":"Female","year":5,"gpa":3.6},
{"id":98,"name":"Eugenia","email":"epaydon2p@jimdo.com","gender":"Female","year":8,"gpa":9.2},
{"id":99,"name":"Salaidh","email":"sedger2q@biblegateway.com","gender":"Female","year":9,"gpa":6.9},
{"id":100,"name":"Rem","email":"rtrain2r@diigo.com","gender":"Male","year":9,"gpa":3.7}
])

return(
  <div>
    <table className='table'> 
    <tr className='table_header'>
        <td>No</td>
        <td>Name</td>
        <td>E-mail</td>
        <td>Year</td>
        <td>GPA</td>
    </tr>

      {data.map( (i) => 
     
        <tr> 
          <td> { i.id } </td>
          <td> { i.name } </td>
          <td> { i.email } </td>
          <td> { i.year } </td>
          <td> { i.gpa } </td>
        </tr>

     )}

    </table>
    
  </div>
)

}


