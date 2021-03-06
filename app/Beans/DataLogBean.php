<?php

namespace App\Beans; // การกำหนดที่อยู่ของ Bean

class DataLogBean {

    public $id;
    public $sideId;
    public $sideCode;
    public $sideName;
    public $symbolId;
    public $volume;
    public $price;
    public $amount;
    public $vat;
    public $netAmount;
    public $date;
    public $brokerId;
    public $mapVol;
    public $mapAvg;
    public $isDw;
    public $createdAt;
    public $createdBy;
    public $updatedAt;
    public $updatedBy;
    public $userId;
    public $logMap = array();

    
    function __construct($dataLogBean = null) {
        if($dataLogBean !== null){
            foreach ($dataLogBean as $key => $value) {
                $this->$key = $value;
            }
        }
    }
    
    public function getId() {
        return $this->id;
    }

    public function getSideId() {
        return $this->sideId;
    }

    public function getSideCode() {
        return $this->sideCode;
    }

    public function getSideName() {
        return $this->sideName;
    }

    public function getSymbolId() {
        return $this->symbolId;
    }

    public function getVolume() {
        return $this->volume;
    }

    public function getPrice() {
        return $this->price;
    }

    public function getAmount() {
        return $this->amount;
    }

    public function getVat() {
        return $this->vat;
    }

    public function getNetAmount() {
        return $this->netAmount;
    }

    public function getDate() {
        return $this->date;
    }

    public function getBrokerId() {
        return $this->brokerId;
    }

    public function getMapVol() {
        return $this->mapVol;
    }

    public function getMapAvg() {
        $this->mapAvg;
    }
    
    public function getIsDw() {
        return $this->isDw;
    }

    public function getCreatedAt() {
        return $this->createdAt;
    }

    public function getCreatedBy() {
        return $this->createdBy;
    }

    public function getUpdatedAt() {
        return $this->updatedAt;
    }

    public function getUpdatedBy() {
        return $this->updatedBy;
    }

    public function getUserId() {
        return $this->userId;
    }

    public function getLogMap() {
        return $this->logMap;
    }

    public function setId($id) {
        $this->id = $id;
        return $this;
    }

    public function setSideId($sideId) {
        $this->sideId = $sideId;
        return $this;
    }

    public function setSideCode($sideCode) {
        $this->sideCode = $sideCode;
        return $this;
    }

    public function setSideName($sideName) {
        $this->sideName = $sideName;
        return $this;
    }

    public function setSymbolId($symbolId) {
        $this->symbolId = $symbolId;
        return $this;
    }

    public function setVolume($volume) {
        $this->volume = $volume;
        return $this;
    }

    public function setPrice($price) {
        $this->price = $price;
        return $this;
    }

    public function setAmount($amount) {
        $this->amount = $amount;
        return $this;
    }

    public function setVat($vat) {
        $this->vat = $vat;
        return $this;
    }

    public function setNetAmount($netAmount) {
        $this->netAmount = $netAmount;
        return $this;
    }

    public function setDate($date) {
        $this->date = $date;
        return $this;
    }

    public function setBrokerId($brokerId) {
        $this->brokerId = $brokerId;
        return $this;
    }

    public function setMapVol($mapVol) {
        $this->mapVol = $mapVol;
        return $this;
    }

    public function setMapAvg($mapAvg) {
        $this->mapAvg = $mapAvg;
        return $this;
    }
    
    public function setIsDw($isDw) {
        $this->isDw = $isDw;
        return $this;
    }

    public function setCreatedAt($createdAt) {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function setCreatedBy($createdBy) {
        $this->createdBy = $createdBy;
        return $this;
    }

    public function setUpdatedAt($updatedAt) {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    public function setUpdatedBy($updatedBy) {
        $this->updatedBy = $updatedBy;
        return $this;
    }

    public function setUserId($userId) {
        $this->userId = $userId;
        return $this;
    }

    public function setLogMap($logMap) {
        $this->logMap = $logMap;
        return $this;
    }

    function popLogMap() {
        return array_pop($this->logMaps);
    }

    function pushLogMap($logMap) {
        array_push($this->logMap, $logMap);
        return $this;
    }

//    function getDataToInsert() {
//        return array('ID'
//            , 'SIDE_ID'
//            , 'SYMBOL_ID'
//            , 'VOLUME'
//            , 'PRICE'
//            , 'AMOUNT'
//            , 'VAT'
//            , 'at_pay'
//            , 'NET_AMOUNT'
//            , 'DATE'
//            , 'BROKER_ID'
//            , 'CREATED_AT'
//            , 'CREATED_BY'
//            , 'UPDATED_AT'
//            , 'UPDATED_BY'
//            , 'USER_ID');
//    }

}
