import * as express from 'express'
var router = express.Router();

let isHealth = true;
let readTime = new Date(Date.now());
let isRead = () => {
    return readTime < new Date(Date.now());
};

router.get('/ready', (_, res) => {

    if (isRead()) {
        res.statusCode = 200;
        return res.send('Ok');
    } else {
        res.statusCode = 500;
        return res.send('');
    }
});

router.get('/health', (_, res) => {

    res.send("OK");
});

router.put('/unhealth', (_, res) => {

    isHealth = false;
    res.send("OK");
});

router.put('/unreadyfor/:seconds', (req, res) => {

    const dado = new Date(new Date(Date.now()).getTime() + (1000 * req.params.seconds));
    readTime = dado;
    res.send("OK");
});

const healthMid = function (_, res, next) {

    if (isHealth) {
        next();
    } else {
        res.statusCode = 500;
        return res.send('');
    }
};

export const routers = router;
export const middlewares = { healthMid };
