package com.heimdall.models;

public class Residence {

    private int id;
    private String zipCode;
    private long number;
    private double latitude;
    private double longitude;
    private int residentsNo;

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public int getResidentsNo() {
        return residentsNo;
    }

    public void setResidentsNo(int residentsNo) {
        this.residentsNo = residentsNo;
    }
}