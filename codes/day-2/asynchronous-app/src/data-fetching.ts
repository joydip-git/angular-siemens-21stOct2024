import { BehaviorSubject, Observable } from "rxjs";
async function get() {
    const subject = new BehaviorSubject<any>([])
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        subject.next(data)
    } catch (error) {
        console.log(error);
    }
    return subject.asObservable()
}

const getData = async () => {
    const obs: Observable<any> = await get()
    obs.subscribe({
        next: (data) => console.log(data.slice(0, 3)),
        error: (e) => console.log(e)
    })
}

getData()

//fetchData()
/*
import { BehaviorSubject, Observable } from "rxjs";
function get() {
    const subject = new BehaviorSubject<any>([])
    const req = new XMLHttpRequest()
    req.onreadystatechange = function () {
        //readystate=>0(init)-1(Send)-2(received)-3(processing)-4(done)
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText)
            //console.log(data.slice(0, 4));
            subject.next(data)
        }
    }

    req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    req.send()

    return subject.asObservable()
}

const obs = get()
obs.subscribe({})
    */
