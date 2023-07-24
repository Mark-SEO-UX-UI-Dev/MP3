<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Classes;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() //subjects GET
    {
        $subjects = Subject::query()
            ->select('subject_id', 'name', 'department')
            ->limit(10)
            ->orderBy('subject_id', 'DESC')
            ->get();
        return view('subjects', compact('subjects'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() //subjects/create GET
    {
        return view('subjects_create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) //subjects POST
    {
        $subject = new Subject;
        $subject->name = $request->input('subj_name');
        $subject->department = $request->input('department');
        $subject->save();

        return redirect("subjects");

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) //subjects/{id} GET
    {
        //SELECT class_id, room, schedule FROM classes WHERE subject_id = 1;
        $subject = Subject::query()
            ->select('subject_id', 'name', 'department')
            ->where('subject_id', '=', $id)
            ->get()
            ->first();
        $classes = Classes::query()
            ->select('class_id', 'room', 'schedule')
            ->where('subject_id', '=', $id)
            ->orderBy('class_id')
            ->get();
        return view('subjects_show', compact('subject', 'classes'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) //subjects/{id} GET
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) //subjects/{id}/edit POST
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) //subjects/{id} DELETE
    {
        //
    }

    public function transferSubject()
    {

    }
}