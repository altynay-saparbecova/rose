import React from 'react'
import s from './Main.module.css'

export const Main = ({ data, showRose }) => {
    return (
        <div className={s.main}>
            {data.map((data) => {
                return (
                    <div className={s.container}>
                        <img src={data.img} onClick={() => showRose(data)} className={s.img} />
                        <div className={s.title}>Букет: {data.title}</div>

                        <div className={s.city}>{data.city} </div>

                    </div>
                )
            })}
        </div>

    )
}