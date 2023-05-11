import React from 'react'
import './Alert.css'
import { useMediaQuery } from 'react-responsive'
import Confetti from 'react-confetti';
import Badgesheck from '../pictures/badgesheck.png'

const Alert = (props) => {
	const isMobilesm = useMediaQuery({ maxWidth: 150 })
	const isMobilemd = useMediaQuery({ maxWidth: 250 ,minWidth:150})
	const isMobilelg = useMediaQuery({ maxWidth: 350 ,minWidth:250})
	const isTabltesm = useMediaQuery({ maxWidth: 450 ,minWidth:350})
	const isTabltemd = useMediaQuery({ maxWidth: 550 ,minWidth:450})
	const isTabltelg = useMediaQuery({ maxWidth: 650 ,minWidth:550})
	const isTabletmin = useMediaQuery({ maxWidth: 750 ,minWidth:650})
	const isTabletpromin = useMediaQuery({ maxWidth: 850 ,minWidth:750})
    const isTabletpromax = useMediaQuery({ maxWidth: 991 ,minWidth:850})
	const isipdadmin = useMediaQuery({ maxWidth: 1053,minWidth:991})
	const isIpademax = useMediaQuery({ maxWidth: 1238,minWidth:1053})
    const isDesktop = useMediaQuery({ maxWidth: 3000 ,minWidth:1238})
  return (
    <div className='AlertConfeti'>
        <div className='Alerttxt'>
            <img src={Badgesheck} alt='check'/>
            <h3>Paimment Succefully</h3>
            <h5>{props.total}.00$</h5>
            <h6>TransactionId {props.transactionId}</h6>
            <h6>{props.time}</h6>
        </div>
        {isMobilesm && <div><Confetti width={50} height={1500} style={{zIndex:'9999'}} /></div>}
        {isMobilemd && <div><Confetti width={150} height={1500} style={{zIndex:'9999'}} /></div>}
        {isMobilelg && <div><Confetti width={250} height={1500} style={{zIndex:'9999'}} /></div>}
        {isTabltesm && <div><Confetti width={350} height={1500} style={{zIndex:'9999'}} /></div>}
        {isTabltemd && <div><Confetti width={450} height={1500} style={{zIndex:'9999'}} /></div>}
        {isTabltelg && <div><Confetti width={550} height={1500} style={{zIndex:'9999'}} /></div>}
        {isTabletmin && <div><Confetti width={650} height={1500} style={{zIndex:'9999'}} /></div>}
        {isTabletpromin && <div><Confetti width={750} height={1500} style={{zIndex:'9999'}} /></div>}
        {isTabletpromax && <div><Confetti width={850} height={1500} style={{zIndex:'9999'}} /></div>}
        {isipdadmin && <div><Confetti width={950} height={1500} style={{zIndex:'9999'}} /></div>}
        {isIpademax && <div><Confetti width={1050} height={1500} style={{zIndex:'9999'}} /></div>}
        {isDesktop && <div><Confetti width={1450} height={1500} style={{zIndex:'9999'}} /></div>}
    </div>
  )
}

export default Alert