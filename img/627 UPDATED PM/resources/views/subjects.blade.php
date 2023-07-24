<html lang="en">

<head>
    @include("layouts/head")
    <title>Subjects</title>
</head>
<body>
    <h1>Subjects</h1>
    <a class="btn btn-success" href="/subjects/create">Add new subject</a>
    @if (count($subjects) > 0)
    <table class="table">
        <tr>
            <th>Subject ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>View subject</th>
        </tr>
        @foreach ($subjects as $s)
        <tr>
            <td>{{$s -> subject_id}}</td>
            <td>{{$s -> name}}</td>
            <td>{{$s -> department}}</td>
            <td><a href="/subjects/{{$s -> subject_id}}">More info</a></td>
        </tr>
        @endforeach        
    </table>
    @else
    <p>No subjects found!</p>
    @endif
</body>

</html>