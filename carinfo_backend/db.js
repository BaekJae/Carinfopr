import express from 'express'
import {ObjectId} from 'mongodb'
const router = express.Router()

export default (db_client)=>{
    //클로저 기준, 바로 윗단계의 async만 수용하므로 재선언 필요
    //데이터를 보내므로 Post
    router.use('/',(req,res,next)=>{
        console.log(`allowed cors: ${req.originalUrl}`);
        //res.set('Access-Control-Allow-Origin','http://localhost:8080')//CORS 허용 -> 특정 아이피에 대한 접근 허용 -> 법적 책임
        res.set('Access-Control-Allow-Origin','*'); //모든 도메인에 대한 CORS허용
        res.set('Access-Control-Allow-Methods','*'); //methods 허용
        res.set('Access-Control-Allow-Headers','*'); //header 항목 허용
        next();
    });

    router.post('/insert',async(req,res)=>{
        try {
            const database = db_client.db('carinfo') //데이터베이스 이름
            const board = database.collection('board') //콜렉션 이름

            let _res = await board.insertOne(req.body);

            res.json({r: 'ok', d:_res});
        }
        catch(e){
            res.json({r:'err',err:e})
        }
    });

    router.post('/users/signUp',async(req,res)=>{
        try {
            const database = db_client.db('carinfo') //데이터베이스 이름
            const user = database.collection('user') //콜렉션 이름
            const cardb = database.collection('cardb')

            console.log(req.body)

            let _res = await user.insertOne(req.body);

            res.json({r: 'ok', d:_res});
        }
        catch(e){
            res.json({r:'err',err:e})
        }
    });

    router.post('/users/login',async(req,res)=>{
        try {
            //console.log(req.body);
            const database = db_client.db('carinfo') //데이터베이스 이름
            const user = database.collection('user') //콜렉션 이름
            let userid = req.body.user.userid.toString();
            let userpw = req.body.user.password.toString();
            let current_user = await(user.find({"user.email":userid, "user.password":userpw}).toArray());
            let data={
                name: current_user[0].user.name,
                car: current_user[0].user.car,
                drivedistance: current_user[0].user.drivedistance
            };
            console.log(data);
            res.json({r: true,d:data});
        }
        catch(e){
            res.json({r:'err',err:e})
        }
    });

    router.get('/find/skip/:skip/limit/:limit', async(req,res) => {
        try{ //skip:앞에서 몇칸을 스킵할 것인가.
            console.log(req.params)
            const database = db_client.db('carinfo') //데이터베이스 이름
            const user = database.collection('user') //콜렉션 이름
            const board = database.collection('board')
            let cursor = await board.find()
                .skip(parseInt(req.params.skip))
                .limit(parseInt(req.params.limit))

            let items = await cursor.toArray();
            //forEach함수 사용하여 데이터 추출, 가공
            //메모리 받아오는 과정 역시 비동기, 따라서 await필요


            res.json({r:'ok',d:items});
        }
        catch(e){
            res.json({r:'err', err:e})
        }
    });

    router.get('/delete/id/:id', async(req,res) => {
        try {
            const database = db_client.db('carinfo') //데이터베이스 이름
            const user = database.collection('user') //콜렉션 이름
            const cardb = database.collection('cardb')
            let _res = await memo.deleteOne({_id: new ObjectId(req.params.id)});//id는 값 변환 필요

            res.json({r: 'ok', d: _res})
        } catch (e) {
            res.json({r: 'err', d: e})
        }
    });
    return router;
}