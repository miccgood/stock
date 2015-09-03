<?php

namespace App\Http\Controllers\Logs;

//use Illuminate\Http\Request;
//use Auth;
use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;

class LogsActiveController extends Controller {

    public function getIndex() {
        $stocks = $this->getActiveDataLogs();
        return view('logs.active', ['stocks' => $stocks]);
    }

    private function getActiveDataLogs() {
        
        
        $dataLogs = DB::select(
                        "SELECT 
            da.`ID` as ID_SRC , da.`SIDE_ID` as SIDE_ID_SRC 
            , ms.`SIDE_CODE` as SIDE_CODE_SRC, ms.`SIDE_NAME` as SIDE_NAME_SRC
            , da.`SYMBOL_ID` as SYMBOL_ID_SRC, msy.`SYMBOL` as SYMBOL_SRC
            , da.`VOLUME` as VOLUME_SRC
            , da.`PRICE` as PRICE_SRC, da.`AMOUNT` as AMOUNT_SRC, da.`VAT` as VAT_SRC
            , da.`NET_AMOUNT` as NET_AMOUNT_SRC, da.`DATE` as DATE_SRC, da.`BROKER_ID` as BROKER_ID_SRC 
            , mbk.`BROKER_NAME` as BROKER_NAME_SRC 
            , da.`MAP_VOL` as MAP_VOL_SRC

            , ma.`ID`as MAP_ID , ma.`MAP_SRC` , ma.`MAP_DESC` , ma.`MAP_VOL` 

            ,dad.`ID` as ID_DESC , dad.`SIDE_ID` as SIDE_ID_DESC
            , msd.`SIDE_CODE` as SIDE_CODE_DESC, msd.`SIDE_NAME` as SIDE_NAME_DESC
            , dad.`SYMBOL_ID` as SYMBOL_ID_DESC, msyd.`SYMBOL` as SYMBOL_DESC
            , dad.`VOLUME` as VOLUME_DESC
            , dad.`PRICE` as PRICE_DESC, dad.`AMOUNT` as AMOUNT_DESC, dad.`VAT` as VAT_DESC
            , dad.`NET_AMOUNT` as NET_AMOUNT_DESC , dad.`DATE` as DATE_DESC , dad.`BROKER_ID` as BROKER_ID_DESC 
            , mbkd.`BROKER_NAME` as BROKER_NAME_DESC
            , da.`MAP_VOL` as MAP_VOL_DESC

        FROM super_stock_db.DATA_LOG da
        LEFT JOIN super_stock_db.LOG_MAP ma on (da.ID = ma.MAP_DESC)
        LEFT JOIN super_stock_db.DATA_LOG dad on (dad.ID = ma.MAP_DESC)
        LEFT JOIN super_stock_db.MAS_SIDE ms on (ms.id = da.SIDE_ID)
        LEFT JOIN super_stock_db.MAS_SIDE msd on (msd.id = dad.SIDE_ID)
        LEFT JOIN super_stock_db.MAS_SYMBOL msy on (msy.id = da.SYMBOL_ID)
        LEFT JOIN super_stock_db.MAS_SYMBOL msyd on (msyd.id = dad.SYMBOL_ID)
        LEFT JOIN super_stock_db.MAS_BROKER mbk ON (da.SYMBOL_ID = mbk.ID)
        LEFT JOIN super_stock_db.MAS_BROKER mbkd ON (dad.BROKER_ID = mbkd.ID)
        WHERE da.USER_ID = ? 
        ORDER BY da.BROKER_ID, da.SYMBOL_ID, da.SIDE_ID desc, da.date
        ", [$this->USER_ID]);
        
        
//        $dataLogs = DB::select('SELECT msy.symbol, ms.side_name as side, dl.volume, dl.price, dl.amount, dl.vat, dl.net_amount, dl.date, mbk.broker_name  as broker, us.name
//            FROM DATA_LOG dl
//            LEFT JOIN MAS_SYMBOL msy ON (dl.SYMBOL_ID = msy.ID)
//            LEFT JOIN MAS_BROKER mbk ON (dl.BROKER_ID = mbk.ID)
//            LEFT JOIN MAS_SIDE ms ON (dl.SIDE_ID = ms.ID)
//            LEFT JOIN USERS us ON (dl.USER_ID = us.ID)
//            WHERE dl.CREATED_AT = (
//                            SELECT MAX(CREATED_AT) FROM DATA_LOG WHERE UPDATED_AT IS NOT NULL
//            ) 
//            AND dl.USER_ID = ?
//            ORDER BY BROKER, SYMBOL, SIDE desc, dl.date', [$this->USER_ID]);
        $stocks = array();
        
        foreach ($dataLogs as $dataLog) {
            $symbol = $dataLog->SYMBOL_SRC;
            $side = $dataLog->SIDE_NAME_SRC;
            if (array_key_exists($symbol, $stocks)) {
                $sides = &$stocks[$symbol];
                $this->checkSide($sides, $side, $dataLog);
            } else {
                $this->getNewChild($stocks, $symbol, $side, $dataLog);
            }
        }
        return $stocks;
    }

    private function getNewChild(&$stocks, $symbol, $side, $dataLog) {
        $sides = array();
        $datas = array();
        array_push($datas, $dataLog);
        $sides[$side] = $datas;
        $stocks[$symbol] = $sides;
    }

    private function getNewSide(&$sides, $side, $dataLog) {
        $datas = array();
        array_push($datas, $dataLog);
        $sides[$side] = $datas;
    }

    private function checkSide(&$sides, $side, $dataLog) {
        if (array_key_exists($side, $sides)) {
            $datas = &$sides[$side];
            array_push($datas, $dataLog);
        } else {
            $this->getNewSide($sides, $side, $dataLog);
        }
    }

}
