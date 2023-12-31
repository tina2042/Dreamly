<?php

class Dream {
    private User $user;
    private String $title;
    private String $description;
    private DateTime $date;
    private int $likes;
    private int $commentAmount;
    private string $privacy;

    public function __construct(User $user, String $title, String $description, DateTime $date, int $likes, int $commentAmount) {
        $this->user = $user;
        $this->title = $title;
        $this->description = $description;
        $this->date = $date;
        $this->likes = $likes;
        $this->commentAmount = $commentAmount;
    }

    public function getUserName():String{
        return $this->user->getName();
    }
    public function setPrivacy(String $privacy)
    {
        $this->privacy=$privacy;
    }
    public function getPrivacy(): String
    {
        return$this->privacy;
    }

    public function getTitle() :String {
        return $this->title;
    }

    public function setTitle($title) {
        $this->title = $title;
    }

    public function getDescription(): String {
        return $this->description;
    }

    public function setDescription($description) {
        $this->description = $description;
    }

    public function getDate() :String {
        return $this->date->format("Y-m-d");
    }

    public function setDate($date) {
        $this->date = $date;
    }

    public function getLikes() :int{
        return $this->likes;
    }
    public function getCommentsAmount() : int{
        return $this->commentAmount;
    }

}